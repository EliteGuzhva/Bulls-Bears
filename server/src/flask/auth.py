import os
from typing import Optional

from flask import Blueprint, g, request, session
from werkzeug.security import check_password_hash, generate_password_hash
from functools import wraps
import jwt
import datetime

from . import util
from . import db as database
from ..model.user import User

bp = Blueprint('auth', __name__, url_prefix='/auth')

def token_required(f):
    @wraps(f)
    def decorator(*args, **kwargs):
        token = None

        if 'x-access-tokens' in request.headers:
            token = request.headers['x-access-tokens']

        if not token:
            return util.message_to_json("No valid token")

        try:
            SECRET_KEY = os.environ.get('SECRET_KEY')
            if SECRET_KEY is None:
                return util.message_to_json("No SECRET_KEY")

            # TODO: check data['exp']
            data = jwt.decode(token, SECRET_KEY, algorithms="HS256")
            user = database.get_db().get_user(data['user_id'])
        except:
            return util.message_to_json("Token is invalid")

        return f(user, *args, **kwargs)

    return decorator

@bp.route('/register', methods=['POST'])
def register():
    username = request.form['username']
    email = request.form['email']
    password = request.form['password']

    db = database.get_db()
    error: Optional[str] = None

    if not username:
        error = 'Username is required.'
    elif not password:
        error = 'Password is required.'
    elif not email:
        error = 'Email is required.'

    user = db.get_user_with_username(username)
    if user is not None:
        error = f'User with username={username} already exists'

    if error is None:
        user = db.authorize_user(username, email,
                                 generate_password_hash(password))
        if user is None:
            error = 'Could not authorize user'

    if error is None:
        return util.message_to_json("Success"), 201
    else:
        return util.message_to_json(error), 418

@bp.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']

    db = database.get_db()
    error: Optional[str] = None

    if not username:
        error = 'Username is required.'
    elif not password:
        error = 'Password is required.'

    user: Optional[User] = None
    if error is None:
        user = db.get_user_with_username(username)
        if user is None:
            error = 'Incorrect username.'
        elif not check_password_hash(user.password_hash, password):
            error = 'Incorrect password.'

    if error is None:
        session.clear()
        session['user_id'] = user.user_id

        SECRET_KEY = os.environ.get('SECRET_KEY')
        if SECRET_KEY is None:
            return util.message_to_json("No SECRET_KEY")

        token = jwt.encode({'user_id': user.user_id,
                            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=360)},
                           SECRET_KEY, algorithm="HS256")

        token_str: str = ""
        if isinstance(token, bytes):
            token_str = token.decode('UTF-8')
        elif isinstance(token, str):
            token_str = token
        else:
            return util.message_to_json("Couldn't generate token"), 418

        return {'token': token_str}
    else:
        return util.message_to_json(error), 418

@bp.before_app_request
def load_logged_in_user():
    user_id = session.get('user_id')

    if user_id is None:
        g.user = None
    else:
        g.user = database.get_db().get_user(user_id)

@bp.route('/logout')
def logout():
    session.clear()

    return util.message_to_json("Success")
