import Image from "next/image";
import styles from "./page.module.css";
// import ReactApexChart from "react-apexcharts";

import dynamic from 'next/dynamic'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default async function Home() {

  return (
    <main >
      <div style={{textAlign: "center"}}>
        <h1>Bubbles</h1>
        {/* {(typeof window !== 'undefined') && */}
          <Bubbles />
        {/* } */}
      </div>
    </main>
  );
}


async function Bubbles() {
  console.log("getdata??")
  const data = await getMatrixData();

  // const series: ApexAxisChartSeries = {data: data.map((i) => {return {'x': i.horCoor, 'y': i.verCoor}})};
  const series = {data: data.map((i) => {return {'x': i.horCoor, 'y': i.verCoor}})};
  const options = {
    chart: {
        height: 350,
        type: 'bubble',
    },
    dataLabels: {
        enabled: false
    },
    fill: {
        opacity: 0.8
    },
    title: {
        text: 'Simple Bubble Chart'
    },
    xaxis: {
        tickAmount: 12,
        type: 'category',
    },
    yaxis: {
        max: 70
    }
  }

  return <div id="chart"><ReactApexChart  series={[series]} type="bubble" height={350} /></div>
}

interface MatrixData {
  horCoor: number;
  verCoor: number;
  value: number;
}

async function getMatrixData(): Promise<MatrixData[]> {
  const res = await fetch('http://0.0.0.0:8000/data-matrix')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();
  return data.map((i: any[]) => {return {'horCoor': i[0], 'verCoor': i[1], 'value': i[2]}});
}

// const state = {
          
//   series: [{
//     name: 'Bubble1',
//     data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
//       min: 10,
//       max: 60
//     })
//   },
//   {
//     name: 'Bubble2',
//     data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
//       min: 10,
//       max: 60
//     })
//   },
//   {
//     name: 'Bubble3',
//     data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
//       min: 10,
//       max: 60
//     })
//   },
//   {
//     name: 'Bubble4',
//     data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
//       min: 10,
//       max: 60
//     })
//   }],
//   options: {
//     chart: {
//         height: 350,
//         type: 'bubble',
//     },
//     dataLabels: {
//         enabled: false
//     },
//     fill: {
//         opacity: 0.8
//     },
//     title: {
//         text: 'Simple Bubble Chart'
//     },
//     xaxis: {
//         tickAmount: 12,
//         type: 'category',
//     },
//     yaxis: {
//         max: 70
//     }
//   }
// }