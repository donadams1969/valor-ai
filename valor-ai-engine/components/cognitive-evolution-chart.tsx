"use client"

import { useEffect, useRef } from "react"
import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

interface CognitiveEvolutionChartProps {
  evolutionRate: number
  epoch: number
}

export function CognitiveEvolutionChart({ evolutionRate, epoch }: CognitiveEvolutionChartProps) {
  const chartRef = useRef<ChartJS<"line">>(null)
  const dataPoints = useRef<number[]>([])
  const timeLabels = useRef<string[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const timeLabel = `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`

      // Simulate slight variations in evolution rate
      const currentRate = evolutionRate + (Math.random() - 0.5) * 0.1

      dataPoints.current.push(currentRate)
      timeLabels.current.push(timeLabel)

      // Keep only last 20 data points
      if (dataPoints.current.length > 20) {
        dataPoints.current.shift()
        timeLabels.current.shift()
      }

      if (chartRef.current) {
        chartRef.current.update("none")
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [evolutionRate])

  const data = {
    labels: timeLabels.current,
    datasets: [
      {
        label: "Cognitive Evolution Rate (%)",
        data: dataPoints.current,
        borderColor: "rgb(34, 197, 94)",
        backgroundColor: "rgba(34, 197, 94, 0.1)",
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 4,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `Live Evolution Rate - Epoch ${epoch}`,
        color: "rgb(156, 163, 175)",
        font: {
          size: 14,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "rgb(107, 114, 128)",
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 5,
        },
        grid: {
          color: "rgba(107, 114, 128, 0.2)",
        },
      },
      y: {
        ticks: {
          color: "rgb(107, 114, 128)",
        },
        grid: {
          color: "rgba(107, 114, 128, 0.2)",
        },
        beginAtZero: false,
      },
    },
    animation: {
      duration: 0,
    },
  }

  return (
    <div className="h-64 w-full">
      <Line ref={chartRef} data={data} options={options} />
    </div>
  )
}
