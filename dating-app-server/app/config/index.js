const dotenv = require('dotenv').config();

CONFIG = {};

CONFIG.app          =   process.env.APP         ||  'develoment';
CONFIG.port         =   process.env.PORT        ||  '3001';

CONFIG.db_dialect   =   process.env.DB_DIALECT  || 'mongo';
CONFIG.db_host      =   process.env.DB_HOST     || 'localhost';
CONFIG.db_port      =   process.env.DB_PORT     || '27017';
CONFIG.db_name      =   process.env.DB_NAME     || 'dateapp-dev';

CONFIG.jwt_encryption = process.env.JWT_ENCRYPTION || 'BDF9BD24B0332D6907EC9DF02B5C86F0424277E1141724BF8AB879C7D2A28DF7';
CONFIG.jwt_expiration = process.env.JWT_EXPIRATION || '10000';