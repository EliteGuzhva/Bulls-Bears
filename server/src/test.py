from typing import List

from flask import Flask
from flask import request

from .database.database_factory import *
from .model.lesson import Lesson
from .model.lesson_data import LessonData


app = Flask(__name__)
db = DatabaseFactory.get(DatabaseType.MONGO)

@app.route('/')
def hello_world():
    return 'Moe Flask приложение в контейнере Docker.'

@app.route('/get_all_lessons')
def get_all_lessons():
    lessons: List[Lesson] = db.get_all_lessons()
    json_data: dict = {"lessons": [l.to_json() for l in lessons]}

    return json_data

@app.route('/get_lesson')
def get_lesson():
    uid: str = str(request.args.get("uid"))
    lesson: Lesson = db.get_lesson(uid)
    json_data: dict = {"lesson": lesson.to_json()}

    return json_data

@app.route('/get_lesson_data')
def get_lesson_data():
    uid: str = str(request.args.get("uid"))
    lesson_data: LessonData = db.get_lesson_data(uid)
    json_data: dict = {"lesson_data": lesson_data.to_json()}

    return json_data

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0')
