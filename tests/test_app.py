#!/usr/bin/env python
# -*- coding: utf-8 -*-

from urllib.parse import urljoin
import json

from flask import Flask
from flask import jsonify
from flask import render_template

import requests

from trumporate.wsgi import app

from trumporate.api.v1.utils import CORPUS_FILE_PATH

API_BASE_URL = 'http://localhost:5000/'


class TestApp:
    def test_trump_index_page(self):
        response = \
            requests.get(API_BASE_URL, headers={'content-type': 'application/json'})
        assert response.status_code == 200

    def test_trump_api(self):
        with open(CORPUS_FILE_PATH, 'r') as file:
            rants_dict = json.load(file)
        response = \
            requests.get(urljoin(API_BASE_URL, 'api/v1/trump/rant/'),
                         headers={'content-type': 'application/json'})
        assert response.status_code == 200
        assert response.headers['Content-Type'] == 'application/json'
        assert response.json()['rant'] in rants_dict.values()

    def test_trump_404(self):
        response = \
            requests.get(urljoin(API_BASE_URL, 'unknownroute/'),
                         headers={'content-type': 'application/json'})
        assert response.status_code == 404
