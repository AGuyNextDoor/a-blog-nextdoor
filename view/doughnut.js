import React from 'react'
import { Doughnut } from 'react-chartjs-2'



export const DoughnutChart = ({userScore, averageScore}) => {
  const data = {
    datasets: [{
      data: [userScore, 10-userScore],
      backgroundColor: [
        "#FDB45C",
        "rgba(54, 162, 235, 0)"
      ],
    }, {
      data: [averageScore, 10-averageScore],
      backgroundColor: [
        "rgba(54, 162, 235, 1)",
        "rgba(54, 162, 235, 0)",
      ],
    }],
    labels: ["average"],
  }
  
  const options = {
    legend: {
        display: false
    },
  }

  return (
    <div id="doughnut" className="limit_size">
      <Doughnut data={data} options={options} width={300} height={250}/>
      <div id="doughnut_number">
        <p id="doughnut_number_you">{userScore}/10</p>
        <p id="doughnut_number_average">{averageScore}/10</p>
      </div>

    </div>
  )
}
