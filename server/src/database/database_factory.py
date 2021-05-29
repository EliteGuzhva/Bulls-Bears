from enum import Enum
from .idatabase import IDatabase
from .database_mongo_impl import DatabaseMongoImpl
from .database_dummy_impl import DatabaseDummyImpl


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
