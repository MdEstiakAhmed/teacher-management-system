import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const StackBarChart = ({ label, datasets }) => {

    const options = {
        plugins: {
            title: {
                display: false,
            },
        },
        responsive: true,
        indexAxis: 'y',
        scales: {
            x: {
                stacked: true,
                ticks: {
                    display: false,
                },
                grid: {
                    color: 'transparent',
                }
            },
            y: {
                stacked: true,
                grid: {
                    color: '#f5f5f5',
                },
            },
        },
    };

    const labels = label;

    const data = {
        labels,
        datasets: datasets,
    };
    return (
        <>
            <Bar options={options} data={data} />
        </>
    )
}
export default StackBarChart;