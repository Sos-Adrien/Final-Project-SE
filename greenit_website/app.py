import sqlite3
import pymysql

from flask import Flask, render_template, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:websitedb@34.89.203.218:5432/postgres'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
engine = create_engine('postgresql://postgres:websitedb@34.89.203.218:5432/postgres')

from sqlalchemy.orm import sessionmaker

Session = sessionmaker(bind=engine)
session = Session()

db = SQLAlchemy(app)


class Shampoo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(100))
    value = db.Column(db.String(100))


class Soap(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(100))
    value = db.Column(db.String(100))


class Cream(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(100))
    value = db.Column(db.String(100))


class Order(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    contact = db.Column(db.String(100))
    pickup = db.Column(db.String(100))
    message = db.Column(db.String(100))
    orderShampoo = db.Column(db.String(100))
    orderSoap = db.Column(db.String(100))
    orderCream = db.Column(db.String(100))
    orderPrice = db.Column(db.String(100))


@app.route('/')
def index():

    ShampooDataHairType = Shampoo.query.filter_by(type="HairType").all()
    ShampooDataHairFlavor = Shampoo.query.filter_by(type="HairFlavor").all()

    SoapDataSkinType = Soap.query.filter_by(type="SkinType").all()
    SoapDataFlavor = Soap.query.filter_by(type="SoapFlavor").all()

    CreamDataSkinType = Cream.query.filter_by(type="FaceType").all()
    CreamDataFlavor = Cream.query.filter_by(type="CreamFlavor").all()

    return render_template(
        'base.html',
        page_title="base",
        DataHairType=list(ShampooDataHairType),
        DataHairFlavor=list(ShampooDataHairFlavor),
        DataBodySkin=list(SoapDataSkinType),
        DataSoapFlavor=list(SoapDataFlavor),
        DataFaceSkin=list(CreamDataSkinType),
        DataCreamFlavor=list(CreamDataFlavor),
    )


@app.route('/ordered', methods=['POST'])
def order_submit():
    data = request.get_json()

    new_order = Order(
        name=data['first_name'],
        contact=data['contact'],
        pickup=data['Pickup'],
        message=data['Message'],
        orderShampoo=data['OrderShampoo'],
        orderSoap=data['OrderSoap'],
        orderCream=data['OrderCream'],
        orderPrice=data['Price'],
    )

    db.session.add(new_order)
    db.session.commit()
    return jsonify({'message': 'new order placed'})
