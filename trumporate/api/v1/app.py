#!/usr/bin/env python
# -*- coding: utf-8 -*-

import random
import json

from flask import Flask
from flask import jsonify

from trumporate.api.v1.utils import CORPUS_FILE_PATH

app = Flask(__name__)


@app.route('/api/v1/trump/rant/')
def return_rant():
    # TODO:
    # This actually makes the logic slower, as mentioned. Will have to
    # shift it to a DB.

    with open(CORPUS_FILE_PATH, 'r') as file:
        rants_dict = json.load(file)

    keys = list(rants_dict.keys())
    markov_rant = rants_dict[random.choice(keys)]
    return jsonify(rant=markov_rant)