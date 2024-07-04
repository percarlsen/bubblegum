import Chart, { ChartItem } from 'chart.js/auto'

(async function() {

  const element = document.getElementById('ignite-matrix') as ChartItem | null;
  if (!element) {
    // TODO: indicates an error in the HTML (missing element). Deal with that.
    return;
  }
  const data = await getMatrixData();

  new Chart(
    element, 
    {
    type: 'scatter',
    data: {
      datasets: [{
        data: [...data.map((i) => {return {x: i.x * 100, y: i.y * 100}})],
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      animation: false,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Share of wallet (%)'
          }
        },
        y: {
          title: {
            display: true,
            text: 'EBIT margin (%)'
          }
        },
      }
    }
  });
})();


interface MatrixData {
  x: number;
  y: number;
  value: number; // total_spend
}

async function getMatrixData(): Promise<MatrixData[]> {
  const res = await fetch('http://0.0.0.0:8000/data-matrix')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json(); // [[1,2,3], ...]
  // Mapping to make the consumption of this function a bit nicer. Could consider moving this to the backend to avoid the added iteration here.
  return data.map((i: any[]) => {return {'x': i[1], 'y': i[0], 'value': i[2]}});
}