import pandas as pd

from pymongo import MongoClient
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import cross_origin
from flask_mail import Mail, Message
from pathlib import Path

#Helper
def absPath(file):
    return str(Path(__file__).parent.absolute() / file)

#Se crea una instancia de Flask
serv = Flask(__name__)

#Chequear vinculación
serv.config['MAIL_SERVER']='smtp.mailtrap.io'
serv.config['MAIL_PORT'] = 2525
serv.config['MAIL_USERNAME'] = '34d50ed3c89ce9'
serv.config['MAIL_PASSWORD'] = 'd9735b0db0dc56'
serv.config['MAIL_USE_TLS'] = True
serv.config['MAIL_USE_SSL'] = False

mail = Mail(serv)

#Se crea una base de datos
MONGO_URI = "mongodb://localhost"
client = MongoClient(MONGO_URI)
database = client["mauri"]
collection = database["reservas"]

#test 
@serv.route('/', methods=['GET'])
@cross_origin(supports_credentials=True)
def test():
    print('Testeo superado en el servidor')
    return ('Todo bien el el servidor')

#Crea una nueva reserva
@serv.route('/create_booking', methods=['POST'])
@cross_origin(supports_credentials=True)
def create_user():
    doc = request.json
    print(doc)
    insert = collection.insert_one(doc)
    if insert:
        msg = Message('Gracias por tu reserva!', sender =   'yesicahuenten@gmail.com', recipients = [doc['email']])
        msg.body = f"Hola {doc['name']}, Recibimos tu reserva para el {doc['date']} para la actividad de {doc['activitie']}"
        mail.send(msg)
        return ('Solicitud recibida y almacenada en el servidor')
    else:
        return('Solicitud recibida pero no almacenada')

#Requiere un resumen de las reservas
@serv.route('/get', methods=['GET'])
@cross_origin(supports_credentials=True)
def generate_report():
    name = list()
    last_name = list()
    email = list()
    qtty = list()
    activitie = list()
    date = list()
    print('Generando CSV con pandas')
    data = collection.find()
    for i in data:
        name.append(i['name'])
        email.append(i['email'])
        last_name.append(i['last_name'])
        qtty.append(i['qtty'])
        date.append(i['date'])
        activitie.append(i['activitie'])
    df = pd.DataFrame({"Nombre": name, "Apellido":last_name, "Cupos":qtty, "Fecha":date, "Actividad":activitie, "Email":email})
    df.to_csv("Reservas.csv")
    print(df)
    route = absPath(r'./')
    print(route)
    serv.config['CLIENT_CSV'] = route
    try:
        return send_from_directory(serv.config['CLIENT_CSV'], path='Reservas.csv', as_attachment=True)
    except FileNotFoundError:
        return 'Error'
    
#Error Mesage
@serv.errorhandler(404)
def not_found(error = None):
    response = jsonify({
        'mensaje': 'Resource not found: '+request.url,
        'status': 404,
        'disculpa': 'Lo siento man'
    })
    return response
    

if __name__ == "__main__":
    serv.run(debug=True, host='0.0.0.0', port=5000)