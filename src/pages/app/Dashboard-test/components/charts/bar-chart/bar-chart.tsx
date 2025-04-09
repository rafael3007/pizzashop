import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { Bar } from 'react-chartjs-2'

import { useTheme } from '@/components/Theme/theme-provider'

import SkeletonBarChart from './skeleton-bar-chart'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
)

interface BarChartProps {
  data?: {
    labels: string[]
    datasets: {
      label: string
      data: number[]
      backgroundColor: string[]
      borderColor: string[]
      borderWidth: number
    }[]
  }
  title: string
}

export const BarChart: React.FC<BarChartProps> = ({ data, title }) => {
  const { theme } = useTheme()
  const textColor = theme === 'dark' ? '#ffffff' : '#000000'
  const gridColor =
    theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
  const tooltipBackgroundColor =
    theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)'

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1000,
      easing: 'easeInOutQuart' as const,
    },
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          usePointStyle: true,
          boxWidth: 10,
          padding: 20,
          color: textColor,
          font: {
            family: "'Inter', sans-serif",
            size: 10,
          },
        },
        onClick: function (_: any, legendItem: any, legend: any) {
          const index = legendItem.datasetIndex
          const ci = legend.chart
          const meta = ci.getDatasetMeta(index)

          meta.hidden =
            meta.hidden === null ? !ci.data.datasets[index].hidden : null
          ci.update()
        },
      },
      title: {
        display: true,
        text: title,
        color: textColor,
        font: {
          family: "'Inter', sans-serif",
          size: 16,
          weight: 'bold' as const,
        },
        padding: {
          top: 10,
          bottom: 20,
        },
      },
      datalabels: {
        anchor: 'end' as const,
        align: 'top' as const,
        formatter: (value: number) => value,
        color: textColor,
        font: {
          weight: 'bold' as const,
          size: 12,
          family: "'Inter', sans-serif",
        },
        padding: 6,
        display: (context: any) => {
          return context.dataset.data[context.dataIndex] > 0
        },
      },
      tooltip: {
        backgroundColor: tooltipBackgroundColor,
        titleColor: textColor,
        bodyColor: textColor,
        borderColor:
          theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
        callbacks: {
          label: (context: any) => {
            return `${context.dataset.label}: ${context.raw}`
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: gridColor,
          drawBorder: false,
        },
        ticks: {
          color: textColor,
          font: {
            family: "'Inter', sans-serif",
          },
          padding: 8,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: textColor,
          font: {
            family: "'Inter', sans-serif",
          },
          padding: 8,
        },
      },
    },
    barPercentage: 0.8,
    categoryPercentage: 0.9,
  }

  return (
    <div className="h-[400px] w-full">
      {data ? (
        <Bar options={options} data={data} plugins={[ChartDataLabels]} />
      ) : (
        <SkeletonBarChart title={title} />
      )}
    </div>
  )
}
