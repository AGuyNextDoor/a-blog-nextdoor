import { HorizontalBar } from "react-chartjs-2"
import { Scatter } from 'react-chartjs-2'

export const InvestigationRecap = ({scoreOne}) => {

  console.log({scoreOne})

  const data = {
    // labels:['-3', '-2', '-1', '0', '1', '2', '3'],
    labels: ["1"],
    datasets: [
      {
        data: [{x: scoreOne, y:0.5}],
        backgroundColor: [
          '#ff6384',
        ],
        yAxisID: "voteData",
        xAxisID: "voteDataX",
        type:"scatter",
        label: null,
        pointRadius: 5,
      },
      {
        data: [1],
        backgroundColor: [
        'rgba(0,0,255,0.4)',
        ],
        borderWidth: 1,
        label: ["Definitively AI"],
        yAxisID: "columnBackground",
        xAxisID: "columnBackgroundX",
      },
      {
        data: [2.5],
        backgroundColor: [
        'rgba(0,0,215,0.2)',
        ],
        borderWidth: 1,
        label: ["Maybe AI"],
        yAxisID: "columnBackground",
        xAxisID: "columnBackgroundX",
      },
      {
        data: [3.5],
        backgroundColor: [
        'rgba(255,255,255,1)',
        ],
        borderWidth: 1,
        label: ["Can't Tell"],
        yAxisID: "columnBackground",
        xAxisID: "columnBackgroundX",
      },
      {
        data: [5],
        backgroundColor: [
        'rgba(255,255,255,0.7)',
        ],
        borderWidth: 1,
        label: ["Maybe Human"],
        yAxisID: "columnBackground",
        xAxisID: "columnBackgroundX",
      },
      {
        data: [6],
        backgroundColor: [
        'rgba(0,255,0,0.8)',
        ],
        borderWidth: 1,
        label: ["Definitively Human"],
        yAxisID: "columnBackground",
        xAxisID: "columnBackgroundX",
      },

    ]  
  };
  
  let options_bar={
    tooltips: {enabled: false},
    hover: {mode: null},
    legend: {
      position: "bottom",
      color: "#ff6384",
      labels: {
          filter: function(label) {
            if (label.text !== null) return true;
          }
        }
      },
    scales: {
      yAxes: [
        { 
          stacked: true,
          id: "columnBackground",
          display: false,
        },
        {
          id: "voteData",
          type: "linear",
          display: false,
          ticks: {
            max: 0,
            min: 1,
          },
        },
      ],
      xAxes: [{
        stacked: false,
        ticks: {
          beginAtZero: true,
        },
        id:"columnBackgroundX",
        display: false,
        
      },{
        stacked: false,
        type: "linear",
        ticks: {
          beginAtZero: true,
          min: -3,
          max: 3
        },
        id:"voteDataX",
        display: false,
      }]
    },
  }

  return (
      <HorizontalBar
        data={data}
        options={options_bar}
        width={90}
        height={20}
        />
  )
}
