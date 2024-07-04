from bubble_backend.utils import SupplierData, read_csv
from bubble_backend.constants import DATA_PATH

def get_data_matrix() -> dict[str, SupplierData]:
    """
    Get the matrix data.
    """
    # Filter away None values
    # return read_json_data(DATA_PATH)["rows"][0]["values"]
    data = read_csv(DATA_PATH)

    return {k: v for k, v in data.items() if v.share_of_wallet <= 1}


