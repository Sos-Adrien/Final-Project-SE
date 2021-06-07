import smtplib

from flask import Flask, render_template, request, jsonify, make_response

app = Flask(__name__)

@app.route('/')
def index():

    return render_template(
        'newbase.html',
        page_title="base",
    )

    
