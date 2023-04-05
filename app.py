import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify
from flask_cors import CORS

engine = create_engine("postgresql://postgres:postgres@localhost:5432/Project_3_db")

Base = automap_base()

Base.prepare(autoload_with=engine)

Commodities = Base.classes.commodity_prices

app = Flask(__name__)
CORS(app)

@app.route('/commodity_prices')
def commodity_prices():
    with engine.connect() as conn:
        result = conn.execute('SELECT * From commodity_prices')
        headers = result.keys()
        rows = result.fetchall()
        data = []
        for row in rows:
            data.append(dict(zip(headers, row)))
        return jsonify(data)

@app.route('/expendature')
def expendature_by_commodity():
    with engine.connect() as conn:
        result = conn.execute('SELECT * From expendature_by_commodity')
        headers = result.keys()
        rows = result.fetchall()
        data = []
        for row in rows:
            data.append(dict(zip(headers, row)))
        return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)