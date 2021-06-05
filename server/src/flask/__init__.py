import os
from flask import Flask

from . import db, fin, auth


def create_app():
    app = Flask(__name__)

    SECRET_KEY = os.environ.get("SECRET_KEY")
    if SECRET_KEY is None:
        raise RuntimeError("No SECRET_KEY")
    app.secret_key = SECRET_KEY

    @app.route('/')
    def hello_world():
        return 'Flask server for Bulls&Bears'

    app.register_blueprint(db.bp)
    app.register_blueprint(fin.bp)
    app.register_blueprint(auth.bp)

    return app

