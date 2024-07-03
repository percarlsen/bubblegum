# Bubblegum

## Backend
### Installation
1. Ensure poetry is installed
2. Install dependencies `poetry install`
3. Activate interactive shell `poetry shell`
4. Navigate to the backend folder `cd bubble-backend/bubble_backend`
5. Run the API server `fastapi dev api.py` (or `poetry run fastapi dev api.py` if you omitted the 3rd step)

### Stack
- Python + Django + FastAPI


## Frontend
### Installation
1. Ensure npm is installed
2. Navigate to the frontend folder `cd bubble-frontend`
3. Install dependencies `npm install`
4. Run it `npm run dev`

### Stack
- HTML + typescript
- Parcel module bundler
- Chart.js for the charts


## TODOs
- Swap out the scatter plot with a bubble plot.
- Understand data. Why rows and columns, duplicate?
- The value/scalar is the EBIT/margin, but what are the x/y axes?
- Python setup lint on save


https://python.land/create-a-python-rest-api