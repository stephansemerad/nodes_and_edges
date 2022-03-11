import json
from tokenize import group
from app import app, db
from app.model.postgres import Structure, Node, Edge
from flask import render_template, jsonify, request
from app.model.postgres import *

@app.route('/')
def hello():
    return render_template( 'index.html')

@app.route('/add_structure', methods = ['POST'])
def add_structure():
    print('add_structure')
    data    = request.form.get('data', None)
    data = json.loads(data)
    print('data:', data)
    print(type(data))
    if not data['name']:
        return jsonify( {'status': 'notok', 'msg': 'Node name is missing'} )
    else:
        structure = Structure()
        structure.name = data['name']
        db.session.add(structure)
        db.session.commit()
        return jsonify( {'status': 'ok'} )
    
@app.route('/add_group', methods = ['POST'])
def add_group():
    print('add_group')
    data    = request.form.get('data', None)
    data = json.loads(data)
    print('data:', data)
    print(type(data))
    if not data['name']:
        return jsonify( {'status': 'notok', 'msg': 'Node name is missing'} )
    else:
        group = Group()
        group.name = data['name']
        group.color = data['color']

        db.session.add(group)
        db.session.commit()
        return jsonify( {'status': 'ok'} )

@app.route('/get_groups')
def get_groups():
    groups = db.session.query(Group).order_by(Group.id).all()
    return jsonify([i.as_dict() for i in groups])


@app.route('/add_node', methods = ['POST'])
def add_node():
    print('add_node')
    data    = request.form.get('data', None)
    data = json.loads(data)
    print('data:', data)
    print(type(data))
    if not data['name']:
        return jsonify( {'status': 'notok', 'msg': 'Node name is missing'} )
    else:
        node = Node()
        node.name = data['name']
        node.structure_id = data['structure_id']
        db.session.add(node)
        db.session.commit()
        return jsonify( {'status': 'ok'} )

@app.route('/add_edge', methods = ['POST'])
def add_edge():
    print('add_edge')
    data = request.form.get('data', None)
    data = json.loads(data)
    print('data: ', data)
    if  not data['parent'] or not data['child']:
        return jsonify( {'status': 'notok', 'msg': 'Parent / Child missing'} )
    else:
        edge = Edge()
        print(data['parent'])
        print(data['child'])
        
        id = data['parent'] + '_' + data['child']
        check = db.session.query(Edge).filter(Edge.id == id).first()
        if not check:
            edge.id         = id
            edge.source     = data['parent']
            edge.target     = data['child']
            db.session.add(edge)
            db.session.commit()
            
    return jsonify( {'status': 'ok'} )
    

@app.route('/update', methods = ['POST'])
def update():
    print('------------------')
    print('update')#
    table = request.form.get('table', None)
    column = request.form.get('column', None)
    id = request.form.get('id', None)
    value = request.form.get('value', '')
    
    print('table: ', table)
    print('column: ', column)
    print('id: ', id)
    print('value: ', value)
    print('------------------')
    
    if table:
        query = None
        if table == 'edge':
            query = db.session.query(Edge).filter(Edge.id == id).first()
        elif table == 'node':
            query = db.session.query(Node).filter(Node.id == id).first()    
        elif table == 'group':
            query = db.session.query(Group).filter(Group.id == id).first()    
        else:
            pass
        
        if query:
            if column == 'label': query.label = value
            if column == 'group': query.group_id = value
            if column == 'color': query.color = value
            if column == 'name':  query.name = value

            db.session.add(query)
            db.session.commit()

            return jsonify( {'status': 'ok'} )

    return jsonify( {'status': 'notok'} )


@app.route('/delete_group', methods = ['POST'])
def delete_group():
    id = request.form.get('id', None)
    node = db.session.query(Group).filter(Group.id == id).first()
    db.session.delete(node)
    db.session.commit()
    
    return jsonify( {'status': 'ok'} )

    

@app.route('/delete_node', methods = ['POST'])
def delete_node():
    print('delete_node')
    id = request.form.get('id', None)
    
    # I. Remove edges
    edges = db.session.query(Edge).filter(or_(Edge.source == id, Edge.target == id)).all()
    for edge in edges: 
        db.session.delete(edge)
    
    # II. Remove nodes
    node = db.session.query(Node).filter(Node.id == id).first()
    db.session.delete(node)
    db.session.commit()
    
    return jsonify( {'status': 'ok'} )


@app.route('/delete_edge', methods = ['POST'])
def delete_edge():
    print('delete_edge')
    id = request.form.get('id', None)
    edge = db.session.query(Edge).filter(Edge.id == id).first()
    db.session.delete(edge)
    db.session.commit()
    return jsonify( {'status': 'ok'} )

@app.route('/get_structure')
def get_structure():
    print('get_structure')

    search          = request.args.get('search','')
    layout          = request.args.get('layout','')
    structure_id    = request.args.get('structure_id','')
    curve_style     = request.args.get('curve_style','straight')

    nodes       = db.session.query(Node).filter(Node.structure_id == structure_id).all()
    node_ids    = [int(i.id) for i in nodes]
    edges       = db.session.query(Edge).filter(or_(Edge.source.in_(node_ids), Edge.target.in_(node_ids))).all()   
    target_ids  = [int(i.target) for i in edges]

    roots = ['#'+str(i) for i in node_ids if i not in target_ids]
    roots = ','.join(roots)
    

    # unbundled-bezier
    # unbundled
    # haystack
    # segments
    # taxi
    # straight
    
    style=[
    {
        "selector": "node",
        "css": {
        "content": "data(full_name)",
        "color": "#FFFFFF",
        "backgroundColor": "#4f46e5",
        "text-wrap": "wrap",
        "text-max-width": 120,
        "font-size": "15px",
        "text-valign": "center",
        "shape": "rectangle",
        "width": "150px",
        "height": "30px",
        "padding": 2
        }
    },

        {
        "selector": ".gold",
        "css": {
        "content": "data(full_name)",
        "color": "#FFFFFF",
        "backgroundColor": "#CFB53B",
        "text-wrap": "wrap",
        "text-max-width": 120,
        "font-size": "15px",
        "text-valign": "center",
        "shape": "rectangle",
        "width": "150px",
        "height": "30px",
        "padding": 2
        }
    },
    
    {
        "selector": "edge",
        "css": {
        "target-arrow-shape": "triangle",
        "curve-style": curve_style,
        "width": 2,
        "line-color": "#888888",
        "target-arrow-color": "#888888"
        }
    },
    {
        "selector": "edge[label]",
        "css": {
        "label": "data(label)",
        "font-size": "16px",
        "color": "#888888"
        }
    }
    ]

    node_list = []
    for node in nodes:
        node = node.as_dict()
        classes = ''
        if search:
            if search.lower().strip() in node['name'].lower().strip():
                classes = 'gold'
            
        node_list.append({ "data": node, 'classes': classes })

    structure =  {
      'structure_id' : structure_id,
      'layout': layout,
      'search': search,
      'roots': roots,
      'nodes': node_list,
      'edges': [{ "data": i.as_dict(), 'classes': '' } for i in edges],
      'style': style,
    },
    
    
    return jsonify(structure)