from enum import Enum
from src.database.idatabase import IDatabase
from src.database.database_mongo_impl import DatabaseMongoImpl
from src.database.database_dummy_impl import DatabaseDummyImpl


class DatabaseType(Enum):
    DUMMY = 0
    MONGO = 1


class DatabaseFactory:
    @staticmethod
    def get(database_type: DatabaseType) -> IDatabase:
        if database_type == DatabaseType.DUMMY:
            return DatabaseDummyImpl()
        elif database_type == DatabaseType.MONGO:
            return DatabaseMongoImpl()
