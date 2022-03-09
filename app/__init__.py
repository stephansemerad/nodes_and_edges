from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)


app.config['TEMPLATES_FOLDER']               = 'templates'
app.config['STATIC_FOLDER']                  = '/cm/app/static'
app.config['static_url_path']                = '/static'
app.config['SQLALCHEMY_DATABASE_URI']        = 'sqlite:///sqlite.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db              = SQLAlchemy(app)
migrate         = Migrate(app, db)

from app.pages.main import *


