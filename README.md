// Greenit MVP:

Greenit is a social, economical and ecological solution to replace industrial production by homemade and local production. 
We aim to develop a local-based economy shaped by local producers and consumers. 
We currently see a trend intot he homemade production which leads to more and more poeple make soaps/shampo/cream etc.. themsleves and 
more and more people wishing to consume those homemade products. This Greenit MVP website is a first minimal experience which tests this new type of coumsption.
This website connects 1 producers with some local consumers. Through the website the users can order what they want where they want it.
This is a first step towards healthy, social and sustainbale consumption.


// Technologies:

The web app runs on Flask with Python

The frontend is built using css/html/JS with JQuery.

The backend is built using Python with a postgres Database.

I use Google Cloud Platform to host the postgres database and the website.


// Development:

Locally Test GreenitMVP for development with the following commands:

git clone https://github.com/Sos-Adrien/Final-Project-SE.git
check python version (python3 is required)
pip install -r requirements.txt
export FLASK_APP=main.py
export FLASK_ENV=development   
source venv/bin/activate
Flask run

// Connect your GoggleCloud database in the app.py:

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:YOUR_PASSWORD@INSTANCE_IP:5432/YOUR_DATABASE_NAME'
All tables are defined in app.py, to format your database run from your virtual environment:
cd greenit_website
python
from app import db 
db.create_all()
exit()

the database is prepopulated in seed.py:
After changing your inputs you can run it in your virtual environment using:
python seed.py

if you get a module message error you need to change "from greenit_website.app import Shampoo, Soap, Cream" to "from app import Shampoo, Soap, Cream"
and run it again.
Once this is finished, replace the module name like it was.

This website is deploy online through Github 
To host the website online you will need the change the GAE_SA_KEY secret key on Github with your own JSON connection key from Google Cloud Patform.

// Running Tests

I run test on Github directly but you can run the test_project.py through your terminal.
So far there is just 1 basic HTTP response test. 