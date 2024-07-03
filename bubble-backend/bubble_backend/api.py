from bubble_backend.selectors_ import get_data_matrix
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
origins = [
    "http://localhost:1234",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"service_name": "bubblegum", "version": "0.0.1"}


@app.get("/data-matrix")
def read_data_matrix():
    return get_data_matrix()