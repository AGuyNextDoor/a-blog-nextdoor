import { Line } from "react-chartjs-2"

export const TuringLine = ({mean, name}) => {

  let roundMean = mean.toFixed(3)

  const data = {
    // labels:['-3', '-2', '-1', '0', '1', '2', '3'],
    datasets: [
      {
        label: 'Human',
        backgroundColor: 'rgba(0,0,255,0.1)',
        pointRadius : 0,
        borderColor: 'rgba(0,0,255,0.4)',
        borderJoinStyle: 'null',
        pointBackgroundColor: 'rgba(0,0,255,0.2)',
        pointBorderColor: 'rgba(179,181,198,0)',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,0)',
        data: [
          {
            x:-3, 
            y:0
          },
          {
            x:-2, 
            y:0
          },
          {
            x:-1, 
            y:0
          },
          {
            x:0, 
            y:0
          },
        ]
      },
      {
        label: 'AI',
        backgroundColor: 'rgba(0,255,0,0.23)',
        pointRadius : 0,
        borderColor: 'rgba(0,255,0,0.4)',
        borderJoinStyle: 'null',
        pointBackgroundColor: 'rgba(0,0,255,0.2)',
        pointBorderColor: 'rgba(179,181,198,0)',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,0)',
        data: [
          {
            x:0, 
            y:0
          },
          {
            x:1, 
            y:0
          },
          {
            x:2, 
            y:0
          },
          {
            x:3,
            y:0
          }
        ]
      },
      {
        label: String(roundMean),
        pointRadius : 5,
        backgroundColor: 'rgba(255, 120, 110,0.8)',
        pointBackgroundColor: 'rgba(255, 120, 110,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 120, 110,1)',
        data: [{
          x:mean,
          y:0,
        }]
      }
    ]  
  };
  let options= {
    scales: {
      yAxes: [{
        display: false,
        gridLines: {
          drawBorder: false,
          display: false,
        },
      }],
      xAxes: [{
        ticks: {
          suggestedMin: -3,
          suggestedMax: 3,
          stepSize:0.5,
        },
        type: 'linear',
        display: true,
        gridLines: {
          drawBorder: true,
          display: true,
        },
      }]
    },
  }

  return (
    <Line
      data={data}
      options={options}
      width={300}
      height={150}
    />
  )
}

// export const TuringLine = ({mean, name}) => {

//   const data = {
//     // labels:['mean global score'],
//     datasets: [
//       {
//         label: name,
//         data: mean
//       }
//     ]
//   }

//   let options= {
//     scales: {
//         xAxes: [{
//             ticks: {
//                 max: 3,
//                 min: -3,
//                 stepSize: 0.5
//             }
//         }]
//     }
//   }

//   return (
//     <Linear
//       type="line"
//       data={data}
//       options={options}
//     />
//   )
// }