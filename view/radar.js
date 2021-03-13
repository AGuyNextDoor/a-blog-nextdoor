import { Radar} from "react-chartjs-2"


export const TuringRadar = ({means, name}) => {

  const meansList = [means.section1Sum, means.section2Sum, means.section3Sum, means.section4Sum, means.section5Sum, means.section6Sum,]

  const data = {
    labels:['section 1', 'section 2', 'section 3', 'section 4', "section 5", "section 6"],
    datasets: [
      {
        label: 'AI',
        backgroundColor: 'rgba(0,0,255,0.23)',
        borderColor: 'rgba(0,0,255,0.2)',
        borderJoinStyle: 'null',
        pointBackgroundColor: 'rgba(0,0,255,0)',
        pointBorderColor: 'rgba(179,181,198,0)',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,0)',
        data: [0,0,0,0,0,0]
      },
      {
        label: 'Human',
        backgroundColor: 'rgba(0,255,0,0.1)',
        borderColor: 'rgba(0,255,0,0.2)',
        borderJoinStyle: 'null',
        pointBackgroundColor: 'rgba(179,181,198,0)',
        pointBorderColor: 'rgba(179,181,198,0)',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,0)',
        data: [3,3,3,3,3,3]
      },
      {
        label: name,
        backgroundColor: 'rgba(255, 120, 110,0.6)',
        borderColor: 'rgba(255, 120, 110,1)',
        pointBackgroundColor: 'rgba(255, 120, 110,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 120, 110,1)',
        data: meansList
      }
    ]  
  };

  let options = {
    scale: {
      legend: {
          display: false
      },
        angleLines: {
            display: false
        },
        ticks: {
            suggestedMin: -3,
            suggestedMax: 3,
            beginAtZero: false,
        }
      }
  };

  return (<Radar
    data={data}
    options={options}
    width={300}
    height={300}
  />)

}