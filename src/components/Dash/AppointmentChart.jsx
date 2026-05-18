import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const options = {
  scales: {
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
    },
    y: {
      min: 0,
      max: 10,
      ticks: {
        display: false,
      },
      grid: {
        display: false,
        drawBorder: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

const labels = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const data = {
  labels,
  datasets: [
    {
      label: "Days",
      data: [6, 7, 5, 8, 2, 9, 2],
      backgroundColor: "#2563eb",
      borderRadius: {
        topLeft: 12,
        topRight: 12,
      },

      borderSkipped: false,
    },
  ],
};
export default function AppointmentChart() {
  return <Bar options={options} data={data} />;
}
