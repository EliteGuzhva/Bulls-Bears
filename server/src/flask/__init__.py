from flask import Flask

from . import db, fin, auth


def create_app():
    app = Flask(__name__)
    app.secret_key = 'Bulls&Bears'

    @app.route('/')
    def hello_world():
        return 'Flask server for Bulls&Bears'

    app.register_blueprint(db.bp)
    app.register_blueprint(fin.bp)
    app.register_blueprint(auth.bp)

    return app

