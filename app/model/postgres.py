
from email.policy import default
from unicodedata import name
from app import db
from sqlalchemy import ForeignKey

class Structure(db.Model):
    id             = db.Column(db.Integer, primary_key=True)
    name           = db.Column(db.String,  nullable=False, unique=True)

    def as_dict(self):  
        dictionary =  {c.name: str(getattr(self, c.name)) for c in self.__table__.columns}
        return dictionary

class Category(db.Model):
    id              = db.Column(db.Integer, primary_key=True)
    description     = db.Column(db.String,  nullable=False, unique=True)
    color           = db.Column(db.String,  nullable=False, default='#4338ca')

    def as_dict(self):  
        dictionary =  {c.name: str(getattr(self, c.name)) for c in self.__table__.columns}
        return dictionary

class Node(db.Model):
    id                  = db.Column(db.Integer, primary_key=True)
    structure_id        = db.Column(db.Integer, ForeignKey('structure.id'), nullable=False)
    name                = db.Column(db.String,  nullable=False, unique=True)
    category_id         = db.Column(db.Integer, ForeignKey('category.id'), nullable=True)

    def as_dict(self):  
        dictionary =  {c.name: str(getattr(self, c.name)) for c in self.__table__.columns}
        return dictionary

class Edge(db.Model):
    id              = db.Column(db.Integer, primary_key=True)
    parent          = db.Column(db.String, ForeignKey('node.id'), nullable=False)
    child           = db.Column(db.String, ForeignKey('node.id'), nullable=False)
    share           = db.Column(db.Numeric, default=1)

    def as_dict(self):  
        dictionary =  {c.name: str(getattr(self, c.name)) for c in self.__table__.columns}
        return dictionary
    
db.create_all()
db.session.commit()
