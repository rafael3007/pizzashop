import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js'
import { Pie } from 'react-chartjs-2'

import { useTheme } from '@/components/Theme/theme-provider'

import SkeletonPieChart from './skeleton-pie-chart'

ChartJS.register(ArcElement, Tooltip, Legend)

interface PieChartProps {
  data: {
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

export const PieChart: React.FC<PieChartProps> = ({ data, title }) => {
  const { theme } = useTheme()
  const textColor = theme === 'dark' ? '#ffffff' : '#000000'

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
          color: textColor,
          font: {
            family: "'Inter', sans-serif",
          },
          padding: 20,
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
        },
        padding: {
          top: 10,
          bottom: 20,
        },
      },
      tooltip: {
        backgroundColor:
          theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        titleColor: textColor,
        bodyColor: textColor,
        color: textColor,
        borderColor:
          theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
      },
      datalabels: {
        color: textColor, // Define a cor do texto dentro do gráfico
        font: {
          size: 14,
        },
        formatter: (value: number, _: unknown) => `${value}%`, // Exibe os valores como porcentagem
      },
    },
  }

  return (
    <div className="h-[300px] w-full">
      {data ? (
        <Pie options={options} data={data} />
      ) : (
        <SkeletonPieChart title={title} />
      )}
    </div>
  )
}
