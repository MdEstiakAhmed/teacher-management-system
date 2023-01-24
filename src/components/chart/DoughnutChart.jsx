import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutChart = ({ label, data, colorSet, title }) => {
	const dataSet = {
		labels: label,
		datasets: [
			{
				label: title,
				data: data,
				backgroundColor: colorSet,
				borderWidth: 1,
				cutout: 80
			},
		],
	};
	return (
		<>
			<Doughnut data={dataSet} />
		</>
	)
}
export default DoughnutChart;