
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
    group_id            = db.Column(db.Integer, db.ForeignKey('group.id', ondelete='set null'))

    group               = db.relationship("Group", foreign_keys=[group_id])

    def as_dict(self):  
        dictionary =  {c.name: str(getattr(self, c.name)) for c in self.__table__.columns}
        group_name  = f'({self.group.name})' if self.group else ''
        
        dictionary['group_id']      = self.group.id if self.group else ''
        dictionary['group_color']   = f'{self.group.color}' if self.group else ''
        dictionary['full_name']     = f'{str(self.id)} - {self.name} {group_name}'
        
        return dictionary

class Edge(db.Model):
    id              = db.Column(db.String, primary_key=True)
    source          = db.Column(db.String, ForeignKey('node.id'), nullable=False)
    target          = db.Column(db.String, ForeignKey('node.id'), nullable=False)
    label           = db.Column(db.String, default="")

    def as_dict(self):  
        dictionary =  {c.name: str(getattr(self, c.name)) for c in self.__table__.columns}
        return dictionary
    
db.create_all()
db.session.commit()
