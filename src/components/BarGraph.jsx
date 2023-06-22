import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarGraph = ({ attainment, isUpdated }) => {
  if (!isUpdated) {
    return (
      <div className="flex justify-center items-center">
        <p>please update the excel form</p>
      </div>
    );
  }
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance;

    const ctx = chartRef.current.getContext("2d");

    // Extract labels and data from the attainment array
    const labels = attainment.slice(1).map((row) => row[0]);
    const data = attainment.slice(1).map((row) => row[row.length - 1]);

    const chartData = {
      labels: labels,
      datasets: [
        {
          label: "Attainment",
          data: data,
          backgroundColor: "rgba(54, 162, 235, 0.8)",
          hoverBackgroundColor: "rgba(54, 162, 235, 1)",
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
        data: chartData,
        options: options,
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [attainment]);

  return <canvas ref={chartRef} />;
};

export default BarGraph;
BarGraph.__isStatic = true;
