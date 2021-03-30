from flask import Flask, request
from flask import render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('base.html', page_title="Test")