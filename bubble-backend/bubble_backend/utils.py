from dataclasses import dataclass
import json


import csv

@dataclass
class SupplierData:
    name: str
    ebit_margin: float # First ebit_margin
    yearly_revenue: float # First "Revenue"
    
    total_spend: float = 0 # Aggregated transaction value (our spend)

    @property
    def share_of_wallet(self) -> float:
        # todo: deal with null values
        if self.yearly_revenue == 0:
            return 0
        return self.total_spend / self.yearly_revenue




def read_csv(filename: str) -> dict[str, SupplierData]:
    # todo: consider moving to selector

    data_per_supplier: dict[str, SupplierData] = {} # org-nr -> supplier

    with open(filename, newline='') as csvfile:
        reader = csv.reader(csvfile, delimiter=';', quotechar='|')
        for row in reader:
            if row[8] != "2018":
                continue

            supplier_name = row[0]
            transcation_value = float(row[1].replace(",", "."))
            org_nr = row[3]
            revenue = float(row[5].replace(",", "."))
            ebit_margin = float(row[7].replace(",", "."))

            
            data = data_per_supplier.get(org_nr)
            
            if data:
                data.total_spend += transcation_value
            else:
                data_per_supplier[org_nr] = SupplierData(
                    name=supplier_name,
                    ebit_margin=ebit_margin,
                    yearly_revenue=revenue,
                    total_spend=transcation_value,
                )
    
    return data_per_supplier

def read_json_data(filename: str):
    with open(filename) as f:
        return json.load(f)