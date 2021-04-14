import { HorizontalBar } from "react-chartjs-2"

export const BarInvestigation = ({scoreOne, scoreTwo}) => {

  const data = {
    // labels:['-3', '-2', '-1', '0', '1', '2', '3'],
    labels: [String(scoreOne), String(scoreTwo)],
    datasets: [
      {
        data: [scoreOne, scoreTwo],
        backgroundColor: [
          '#FDB45C',
          'rgba(54, 162, 235, 1)',
        ],
        borderColor: [
          '#FDB45C',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
        barThickness: 20
      }
    ]  
  };
  
  let options= {
    legend: {
        display: false
    },
    scales: {
      angleLines: {
            display: false
        },
        yAxes:[{
          gridLines: {
                color: "rgba(0, 0, 0, 0)",
            }
        }],
      xAxes: [
        {
          display: false,
          ticks: {
            beginAtZero: true,
            display: false
          }
        },
      ],
      x: {
        grid: {
          offset: true
        }
      }
    },
  }

  return (
    <div className="limit_size">
      <HorizontalBar
        data={data}
        options={options}
        width={300}
        height={200}
        />
    </div>
  )
}
