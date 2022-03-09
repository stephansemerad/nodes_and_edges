from app import app
from flask import render_template, jsonify, request
from app.model.postgres import *

@app.route('/')
def hello():
    return render_template( 'index.html')

@app.route('/add_node', methods = ['POST'])
def add_node():
    node    = request.form.get('data', None)
    print('node: %s' % node)
    
    return jsonify( {'status': 'OK'} )

@app.route('/delete_node', methods = ['POST'])
def delete_node():
    return jsonify( {'status': 'OK'} )

@app.route('/add_edge', methods = ['POST'])
def add_edge():
    return jsonify( {'status': 'OK'} )

@app.route('/delete_edge', methods = ['POST'])
def delete_edge():
    return jsonify( {'status': 'OK'} )

@app.route('/get_structure')
def get_structure():
    return jsonify( {'status': 'OK'} )