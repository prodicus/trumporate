#!/usr/bin/env python
# -*- coding: utf-8 -*-

from flask import Flask
from flask import jsonify

from trumporate.api.v1.utils import markovipy_obj

app = Flask(__name__)


@app.route('/api/v1/trump/rant/')
def return_rant():
    # TODO:
    # This actually makes the logic slower, as mentioned. Will have to
    # shift it to a DB.
    markov_rant = markovipy_obj.generate_sentence()
    return jsonify(rant=markov_rant)
