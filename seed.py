import sqlite3

from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine

from app import Shampoo
from app import Soap
from app import Cream

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
engine = create_engine('sqlite:///db.sqlite3', echo=True)

from sqlalchemy.orm import sessionmaker

Session = sessionmaker(bind=engine)
session = Session()

db = SQLAlchemy(app)


if __name__ == "__main__":
    session.add_all(
        [
            Shampoo(type='HairFlavor', value="none"),
            Shampoo(type='HairFlavor', value="mint"),
            Shampoo(type='HairFlavor', value="peach"),
            Shampoo(type='HairFlavor', value="ibiscus"),

            Shampoo(type='HairType', value="none"),
            Shampoo(type='HairType', value="oily"),
            Shampoo(type='HairType', value="dry"),
            Shampoo(type='HairType', value="mixte"),
        ]
    )

    session.add_all(
        [
            Soap(type='SoapFlavor', value="none"),
            Soap(type='SoapFlavor', value="peach"),
            Soap(type='SoapFlavor', value="teatree"),
            Soap(type='SoapFlavor', value="lavander"),

            Soap(type='SkinType', value="none"),
            Soap(type='SkinType', value="greasy"),
            Soap(type='SkinType', value="dry"),
            Soap(type='SkinType', value="mixte"),
        ]
    )


    session.add_all(
        [
            Cream(type='CreamFlavor', value="none"),
            Cream(type='CreamFlavor', value="neutral"),
            Cream(type='CreamFlavor', value="teatree"),
            Cream(type='CreamFlavor', value="mint"),

            Cream(type='FaceType', value="none"),
            Cream(type='FaceType', value="greasy"),
            Cream(type='FaceType', value="dry"),
            Cream(type='FaceType', value="mixte"),
        ]
    )

    session.commit()
