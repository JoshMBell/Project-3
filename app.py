import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import datetime
from flask import Flask, jsonify
from flask_cors import CORS

engine = create_engine("postgresql://postgres:postgres@localhost:5432/Project_3_db")

Base = automap_base()

Base.prepare(autoload_with=engine)

Commodities = Base.classes.commodity_prices

app = Flask(__name__)
CORS(app)
@app.route('/financial_data')
def commodity_prices():
    with engine.connect() as conn:
        result = conn.execute("SELECT * FROM commodity_prices RIGHT JOIN expendature_by_commodity ON commodity_prices.date = expendature_by_commodity.date Where commodity_prices.date > '1988-08-01'")
        headers = result.keys()
        rows = result.fetchall()
        data = []
        for row in rows:
            data.append(dict(zip(headers, row)))
        return jsonify(data)

# @app.route('/expendature')
# def expendature_by_commodity():
#     with engine.connect() as conn:
#         result = conn.execute('SELECT * From expendature_by_commodity')
#         headers = result.keys()
#         rows = result.fetchall()
#         data = []
#         for row in rows:
#             data.append(dict(zip(headers, row)))
#         return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)