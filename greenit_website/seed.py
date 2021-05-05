import sqlite3

from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:websitedb@34.89.203.218:5432/postgres'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
engine = create_engine('postgresql://postgres:websitedb@34.89.203.218:5432/postgres')

from greenit_website.app import Shampoo, Soap, Cream
from sqlalchemy.orm import sessionmaker

Session = sessionmaker(bind=engine)
session = Session()

db = SQLAlchemy(app)

if __name__ == "__main__":
    session.add_all(
        [
            Shampoo(type='HairFlavor', value="none"),
            Shampoo(type='HairFlavor', value="Mango"),
            Shampoo(type='HairFlavor', value=" Cedar & Hinoky wood"),

            Shampoo(type='HairType', value="none"),
            Shampoo(type='HairType', value="Oily"),
            Shampoo(type='HairType', value="Dry"),
            Shampoo(type='HairType', value="Normal"),
        ]
    )

    session.add_all(
        [
            Soap(type='SoapFlavor', value="none"),
            Soap(type='SoapFlavor', value="Coconut"),
            Soap(type='SoapFlavor', value="Hô Wood"),

            Soap(type='SkinType', value="none"),
            Soap(type='SkinType', value="Normal"),
            Soap(type='SkinType', value="Dry"),
            Soap(type='SkinType', value="Damaged"),
        ]
    )


    session.add_all(
        [
            Cream(type='CreamFlavor', value="neutral"),

            Cream(type='FaceType', value="none"),
            Cream(type='FaceType', value="Oily"),
            Cream(type='FaceType', value="Dry"),
            Cream(type='FaceType', value="Normal"),
        ]
    )

    session.commit()
