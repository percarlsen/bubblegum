from bubble_backend.selectors_ import get_data_matrix
from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"service_name": "bubblegum", "version": "0.0.1"}


@app.get("/data-matrix")
def read_data_matrix():
    return get_data_matrix()