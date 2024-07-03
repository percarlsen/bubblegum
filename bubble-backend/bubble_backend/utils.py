import json


def read_data(filename: str):
    with open(filename) as f:
        return json.load(f)