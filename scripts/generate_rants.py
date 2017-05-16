#!/usr/bin/env python
# -*- coding: utf-8 -*-

# TODO
# change the variable
# CORPUS_FILE = "speeches.txt" inside trumporate.api.v1.utils for
# different corpus files
# from trumporate.api.v1.utils import markovipy_obj

import os
from pprint import pprint
import json

from markovipy.markovipy import MarkoviPy

CURRENT_DIR = os.path.dirname(__file__)
ROOT_DIR = os.path.dirname(os.path.dirname(os.path.dirname(CURRENT_DIR)))
CORPUS_DIR = os.path.join(ROOT_DIR, "corpus")

# TODO: make a proper script to populate the database.
CORPUS_FILE = "speeches.txt"
CORPUS_FILE_PATH = os.path.join(ROOT_DIR, "corpus", "presidential16_speeches",
                                CORPUS_FILE)

markovipy_obj = MarkoviPy(CORPUS_FILE_PATH, 3)


def populate_rants():
    """
    Will save the rants in a flat JSON file
    """
    COUNTER = 1000
    DICT = {}

    while COUNTER < 2000:
        markov_rant = markovipy_obj.generate_sentence()
        DICT[COUNTER] = markov_rant
        COUNTER += 1
    pprint(DICT)

    with open(os.path.join(CORPUS_DIR, "rants_1000to1999.txt"), "w") as outfile:
        json.dump(DICT, outfile, indent=4)

if __name__ == "__main__":
    populate_rants()
