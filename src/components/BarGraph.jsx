import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance;

    const ctx = chartRef.current.getContext("2d");

    // Dummy data
    const data = {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "Dummy Data",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)",
            "rgba(255, 159, 64, 0.5)",
          ],
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
    };

    if (chartRef.current) {
      if (chartInstance) {
        chartInstance.destroy();
      }

      chartInstance = new Chart(ctx, {
        type: "bar",
        data: data,
        options: options,
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default BarGraph;
