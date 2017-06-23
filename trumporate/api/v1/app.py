#!/usr/bin/env python
# -*- coding: utf-8 -*-

import random
import json

from flask import Flask
from flask import jsonify
from flask import render_template

from trumporate.api.v1.utils import CORPUS_FILE_PATH

app = Flask(__name__)


@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html', title='Home')


@app.route('/api/v1/trump/rant/')
def return_rant():
    with open(CORPUS_FILE_PATH, 'r') as file:
        rants_dict = json.load(file)

    keys = list(rants_dict.keys())
    markov_rant = rants_dict[random.choice(keys)]
    return jsonify(rant=markov_rant)
