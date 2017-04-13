#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os

from markovipy.markovipy import MarkoviPy

CURRENT_DIR = os.path.dirname(__file__)
ROOT_DIR = os.path.dirname(CURRENT_DIR)

# TODO: make a proper script to populate the database.
CORPUS_FILE = "speeches.txt"
CORPUS_FILE_PATH = os.path.join(ROOT_DIR, "corpus", "presidential16_speeches", CORPUS_FILE)

markovipy_obj = MarkoviPy(CORPUS_FILE_PATH, 3)
