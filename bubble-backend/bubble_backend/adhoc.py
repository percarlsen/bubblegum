# import polars as pl
# # from .constants import _DATA_PATH
# from bubble_backend.constants import DATA_PATH

# data = pl.read_json(
#     DATA_PATH,
# )

# print(data["rows"])



import json

def read_data(filename: str):
    with open(filename) as f:
        return json.load(f)
    
from bubble_backend.constants import DATA_PATH

data = read_data(DATA_PATH)
    
print(data["rows"])