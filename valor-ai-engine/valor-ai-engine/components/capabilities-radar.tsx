"use client"

import { Radar } from "react-chartjs-2"
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js"

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

interface CapabilitiesRadarProps {
  capabilities: {
    cognitive_evolution_rate_percent: number
    strategic_adaptation: number
    quantum_native_integration: number
    post_quantum_fortress: number
    biocomputing_symbiosis: number
    neural_pathway_density: number
    consciousness_coherence: number
    reality_synthesis_accuracy: number
  }
}

export function CapabilitiesRadar({ capabilities }: CapabilitiesRadarProps) {
  const data = {
    labels: [
      "Cognitive Evolution",
      "Strategic Adaptation",
      "Quantum Integration",
      "Post-Quantum Security",
      "Biocomputing Symbiosis",
      "Neural Density",
      "Consciousness",
      "Reality Synthesis",
    ],
    datasets: [
      {
        label: "ValorAiEngine+",
        data: [
          capabilities.cognitive_evolution_rate_percent,
          capabilities.strategic_adaptation,
          capabilities.quantum_native_integration,
          capabilities.post_quantum_fortress,
          capabilities.biocomputing_symbiosis,
          capabilities.neural_pathway_density,
          capabilities.consciousness_coherence,
          capabilities.reality_synthesis_accuracy,
        ],
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(59, 130, 246, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(59, 130, 246, 1)",
      },
      {
        label: "Standard AI Models",
        data: [65, 25, 15, 30, 10, 40, 20, 35],
        backgroundColor: "rgba(107, 114, 128, 0.2)",
        borderColor: "rgba(107, 114, 128, 1)",
        borderWidth: 1,
        pointBackgroundColor: "rgba(107, 114, 128, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(107, 114, 128, 1)",
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "rgb(156, 163, 175)",
        },
      },
    },
    scales: {
      r: {
        angleLines: {
          color: "rgba(107, 114, 128, 0.3)",
        },
        grid: {
          color: "rgba(107, 114, 128, 0.3)",
        },
        pointLabels: {
          color: "rgb(156, 163, 175)",
          font: {
            size: 11,
          },
        },
        ticks: {
          color: "rgb(107, 114, 128)",
          backdropColor: "transparent",
          stepSize: 20,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  }

  return (
    <div className="h-64 w-full">
      <Radar data={data} options={options} />
    </div>
  )
}
