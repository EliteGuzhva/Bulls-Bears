from pymongo import MongoClient

# init
cluster = MongoClient("mongodb+srv://dbAdmin:StonkApps2021@cluster0.ww5af.mongodb.net/bulls-bears?retryWrites=true&w"
                      "=majority")
db = cluster["bulls-bears"]
collection = db["data"]

# generate some data
post = {
    "app_name": "Bulls&Bears",
    "company_name": "StonkApps",
    "year": 2021
}

# insert in db
insert_result = collection.insert_one(post)
print(insert_result.inserted_id)

# search
search_results = collection.find({"year": 2021})
for result in search_results:
    print(result)

# remove
delete_result = collection.delete_one({"_id": insert_result.inserted_id})
print("Deleted", delete_result.deleted_count, "documents")


# lesson insertion example
lesson = {
    "level_name": "Level 1",
    "index": 0,
    "title": "Introduction",
    "description": "Basic introduction to a course",
    "data": "Lesson content should be here..."
}

lessons_collection = db["lessons"]
inserted_lesson = lessons_collection.insert_one(lesson)
search_result = lessons_collection.find_one({"_id": inserted_lesson.inserted_id})
print(search_result)
lessons_collection.delete_one({"_id": inserted_lesson.inserted_id})  # delete to keep db clean
