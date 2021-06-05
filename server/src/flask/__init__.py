from flask import Flask

from . import db, fin


def create_app():
    app = Flask(__name__)

    @app.route('/')
    def hello_world():
        return 'Flask server for Bulls&Bears'

    app.register_blueprint(db.bp)
    app.register_blueprint(fin.bp)

    return app

