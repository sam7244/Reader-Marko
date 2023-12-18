import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarGraph2 = ({ mappedData, isUpdated }) => {
  console.log("dfskndjndskjfngkdnkfgndfngndfg", mappedData);
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
    const labels = mappedData[0];
    const data = mappedData[6];
    //console.log("this is  the data grapgh 2", mappedData);
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
      scales: {
        x: {
          title: {
            display: true,
            text: "CO DATA",
          },
        },
        y: {
          title: {
            display: true,
            text: "Attainment",
          },
        },
      },
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
  }, [mappedData]);

  return <canvas ref={chartRef} />;
};

export default BarGraph2;
BarGraph2.__isStatic = true;
