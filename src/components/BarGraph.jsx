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
          backgroundColor: "rgba(54, 162, 235, 0.5)",
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
