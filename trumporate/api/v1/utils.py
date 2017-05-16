#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os

from markovipy.markovipy import MarkoviPy

CURRENT_DIR = os.path.dirname(__file__)
ROOT_DIR = os.path.dirname(os.path.dirname(os.path.dirname(CURRENT_DIR)))

# TODO: make a proper script to populate the database.
CORPUS_FILE = "rants_2000.txt"
CORPUS_FILE_PATH = os.path.join(ROOT_DIR, "corpus",
                                CORPUS_FILE)
