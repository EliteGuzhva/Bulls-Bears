from typing import List

from flask import Blueprint, request

from ..database.database_factory import *
from ..model.lesson import Lesson
from ..model.lesson_data import LessonData

bp = Blueprint('db', __name__, url_prefix='/db')
db = DatabaseFactory.get(DatabaseType.MONGO)

@bp.route('/get_all_lessons')
def get_all_lessons():
    lessons: List[Lesson] = db.get_all_lessons()
    json_data: dict = {"lessons": [l.to_json() for l in lessons]}

    return json_data

@bp.route('/get_lesson')
def get_lesson():
    uid: str = str(request.args.get("uid"))
    lesson: Lesson = db.get_lesson(uid)
    if lesson is None:
        return "404: Lesson not found", 404

    json_data: dict = {"lesson": lesson.to_json()}

    return json_data

@bp.route('/get_lesson_data')
def get_lesson_data():
    uid: str = str(request.args.get("uid"))
    lesson_data: LessonData = db.get_lesson_data(uid)
    if lesson_data is None:
        return "404: Lesson data not found", 404

    json_data: dict = {"lesson_data": lesson_data.to_json()}

    return json_data
