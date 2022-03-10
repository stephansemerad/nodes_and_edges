
from app import db
from sqlalchemy import ForeignKey
from sqlalchemy import or_

class Structure(db.Model):
    id             = db.Column(db.Integer, primary_key=True)
    name           = db.Column(db.String,  nullable=False)
    layout         = db.Column(db.String,  default="breadthfirst")
    curve_style    = db.Column(db.String,  default="straight")
    
    def as_dict(self):  
        dictionary =  {c.name: str(getattr(self, c.name)) for c in self.__table__.columns}
        return dictionary

class Group(db.Model):
    id             = db.Column(db.Integer, primary_key=True)
    name           = db.Column(db.String,  nullable=False)
    color          = db.Column(db.String,  nullable=False)
    
    def as_dict(self):  
        dictionary =  {c.name: str(getattr(self, c.name)) for c in self.__table__.columns}
        return dictionary

class Node(db.Model):
    id                  = db.Column(db.Integer, primary_key=True)
    structure_id        = db.Column(db.Integer, ForeignKey('structure.id'))
    name                = db.Column(db.String,  nullable=False)
    group_id            = db.Column(db.Integer)
    classes             = db.Column(db.String)

    def as_dict(self):  
        dictionary =  {c.name: str(getattr(self, c.name)) for c in self.__table__.columns}
        dictionary['full_name'] = f'{str(self.id)} - {self.name}'
        return dictionary

class Edge(db.Model):
    id              = db.Column(db.String, primary_key=True)
    source          = db.Column(db.String, ForeignKey('node.id'), nullable=False)
    target          = db.Column(db.String, ForeignKey('node.id'), nullable=False)
    label           = db.Column(db.String, default="")
    classes         = db.Column(db.String)

    def as_dict(self):  
        dictionary =  {c.name: str(getattr(self, c.name)) for c in self.__table__.columns}
        return dictionary
    
db.create_all()
db.session.commit()
