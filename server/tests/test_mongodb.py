"""
Временный тест для проверки CI/CD
"""

import unittest

from pymongo import MongoClient

# init
cluster = MongoClient("mongodb+srv://dbAdmin:StonkApps2021@cluster0.ww5af.mongodb.net/bulls-bears?retryWrites=true&w"
                      "=majority")
db = cluster["bulls-bears"]
collection = db["data"]

def test_modify_collection():
    lesson = {
        "level_name": "Level 1",
        "index": 0,
        "title": "Introduction",
        "description": "Basic introduction to a course",
        "data": "Lesson content should be here..."
    }

    inserted_lesson = collection.insert_one(lesson)
    search_result = collection.find_one({"_id": inserted_lesson.inserted_id})
    collection.delete_one({"_id": inserted_lesson.inserted_id})

    assert inserted_lesson is not None
    assert search_result is not None
    assert search_result["_id"] == inserted_lesson.inserted_id
