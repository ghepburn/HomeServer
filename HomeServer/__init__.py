from flask import Flask
#from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)


app.config["ROOT_PATH"] = os.path.dirname(os.path.abspath(__file__))
#app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///site.db" 

#db = SQLAlchemy(app)

from . import routes