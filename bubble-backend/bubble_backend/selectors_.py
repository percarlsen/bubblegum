from bubble_backend.utils import read_data
from bubble_backend.constants import DATA_PATH

def get_data_matrix() -> list[tuple[float | None, float | None, float]]:
    """
    Get the matrix data.
    """
    # Filter away None values
    return read_data(DATA_PATH)["rows"][0]["values"]

