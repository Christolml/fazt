# redirect me permite redireccionar a una url, url_for me permite poner la funcion a la que quiere redireccionar
# Index se llama la funcion que tengo en mi ruta "/" y me muestra la pagina principal
# flash me permite mandar mensajes entre vistas

from flask import Flask, render_template, request, redirect, url_for, flash
from flask_mysqldb import MySQL

# MySQL Connection
app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] = 'flaskcontacts'
# app.config['MYSQL_PORT'] = '3306'
mysql = MySQL(app)

# Settings
# secret_key me permite definir como va a ir protegida mi informacion y me va a servir para el manejo de
# la sesion en la aplicacion
app.secret_key = 'mysecretkey'


# cree una ruta y cuando accedo a ella se ejecuta la funcion de index la cual me 
# regresa un hola mundo cuando acceda a la ruta
@app.route('/')
def Index():
  cur = mysql.connection.cursor()
  cur.execute('SELECT * FROM contacts')
  data = cur.fetchall()
  # ando utilizando render_template el cual me permite renderizar un archivo y no ocupo ponerle la carpeta donde esta
  # porque por default flask lo busca en una carpeta templates, solo le paso el nombre del archivo
  # a mi render template le paso mis contactos que obtuve de la consulta a mi base da datos
  return render_template('index.html', contacts = data)



# con request.form puedo capturar los datos que el usuario introduce
# mysql.connection.cursor(), me permite establecer la conexión y eso me devuelve algo que lo guardo
# en cur y ya con ese puedo  escribir consultas en mysql
# mysql.connection.commit(), me permite ejecutar la consulta
@app.route('/add_contact', methods=['POST'])
def add_contact():
  if request.method == 'POST':
    fullname = request.form['fullname']
    phone = request.form['phone']
    email = request.form['email']
    cur = mysql.connection.cursor()
    cur.execute("""INSERT INTO contacts (fullname, phone, email) VALUES (%s, %s, %s)""", (fullname, phone, email))
    mysql.connection.commit()
    flash('Contact Added successfully')
    return redirect(url_for('Index'))


# otra forma de recibir un parametro sin especificar el tipo que es
@app.route('/edit/<id>')
def edit_contact(id):
  cur = mysql.connection.cursor()
  cur.execute('SELECT * FROM contacts WHERE id = %s', (id))
  data = cur.fetchall()
  return render_template('edit-contact.html', contact = data[0])


@app.route('/update/<id>', methods=['POST'])
def update_contact(id):
  if request.method == 'POST':
    fullname = request.form['fullname']
    phone = request.form['phone']
    email = request.form['email']
    cur = mysql.connection.cursor()
    # la triple " me permite escribir una sentencia en multiples lineas
    cur.execute("""
      UPDATE contacts
      SET fullname = %s,
          phone = %s,
          email = %s
      WHERE id = %s
    """, (fullname, phone, email, id))
    mysql.connection.commit()
    flash('Contact Updated Successfully')
    return redirect(url_for('Index'))




# a mi ruta le estoy diciendo que va a recibir un parametro del tipo string
# 
@app.route('/delete/<string:id>')
def delete_contact(id):
  cur = mysql.connection.cursor()
  cur.execute('DELETE FROM contacts WHERE id={0}'.format(id))
  mysql.connection.commit()
  flash('Contact Deleted Successfully')
  return redirect(url_for('Index'))



# verifico si mi archivo App es el que esta encargado de arrancar todo
if __name__ == '__main__':
# con debug = True me reinicia el servidor cuando haya cambios en el servidor
  app.run(port = 3000, debug = True)







# CREATE TABLE contacts (
# id INT(6) AUTO_INCREMENT PRIMARY KEY,
# fullname VARCHAR(30),
# phone VARCHAR(30),
# email VARCHAR(50)
# )
# CREATE TABLE contacts (
# fullname VARCHAR(30),
# phone VARCHAR(30),
# email VARCHAR(50)
# )