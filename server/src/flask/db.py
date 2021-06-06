from typing import List

from flask import Blueprint, request, g

from . import util, auth
from ..database.database_factory import *

bp = Blueprint('db', __name__, url_prefix='/db')

def get_db():
    if 'db' not in g:
        g.db = DatabaseFactory.get(DatabaseType.MONGO)

    return g.db

@bp.route('/get_all_lessons')
def get_all_lessons():
    db = get_db()
    lessons = db.get_all_lessons()
    json_data: dict = {"lessons": [l.to_json() for l in lessons]}

    return json_data

# TODO: require token
@bp.route('/get_lesson')
def get_lesson():
    db = get_db()
    uid: str = str(request.args.get("uid"))
    lesson = db.get_lesson(uid)
    if lesson is None:
        return util.message_to_json("Lesson not found"), 404

    json_data: dict = {"lesson": lesson.to_json()}

    return json_data

@bp.route('/get_lesson_data')
def get_lesson_data():
    db = get_db()
    uid: str = str(request.args.get("uid"))
    lesson_data = db.get_lesson_data(uid)
    if lesson_data is None:
        return util.message_to_json("Lesson data not found"), 404

    json_data: dict = {"lesson_data": lesson_data.to_json()}

    return json_data

@bp.route('/sandbox_init', methods=['POST'])
@auth.token_required
def sandbox_init(user):
    db = get_db()
    virtual_start: str = str(request.form["virtual_start"])
    balance: float = float(request.form["balance"])

    user = db.sandbox_init(user.user_id, virtual_start, balance)
    if user is None:
        return util.message_to_json("Couldn't initialize sandbox"), 401

    return user.to_json(), 201
