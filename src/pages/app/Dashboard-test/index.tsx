import {
  AlertTriangle,
  Car,
  DollarSign,
  TrendingDown,
  TrendingUp,
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { BarChart } from './components/charts/bar-chart/bar-chart'
import { CardChart } from './components/charts/card-chart/card-chart'
import { PieChart } from './components/charts/pie-chart/pie-chart'
import { SuspiciousRefuelsTable } from './components/charts/suspecious-refuel/suspecious-refuel'
import { DashboardFilters } from './components/filter'

export function DashboardPage() {
  const suspiciousRefuels = [
    {
      id: '1',
      date: '27/03/2025',
      driver: 'João Silva',
      vehicle: 'ABC-1234',
      reason: 'Múltiplos abastecimentos no dia',
      amount: 150,
      fuelType: 'Diesel',
    },
    {
      id: '2',
      date: '29/03/2025',
      driver: 'Maria Santos',
      vehicle: 'XYZ-9876',
      reason: 'Consumo acima da média',
      amount: 200,
      fuelType: 'Gasolina',
    },
    {
      id: '3',
      date: '29/03/2025',
      driver: 'João Vittor P',
      vehicle: 'NZ5-P48A',
      reason: 'Abastecimento em local não autorizado',
      amount: 120,
      fuelType: 'Etanol',
    },
  ]

  const vehicleEfficiencyData = {
    labels: ['ABC-1234', 'DEF-5678', 'GHI-9012', 'JKL-3456', 'MNO-7890'],
    datasets: [
      {
        label: 'KM/L',
        data: [3.8, 3.5, 3.2, 3.0, 2.8],
        backgroundColor: ['#D62B00'],
        borderColor: ['#6B1500'],
        borderWidth: 1,
      },
    ],
  }

  const fuelTypeDistributionData = {
    labels: ['Diesel', 'Gasolina', 'Etanol'],
    datasets: [
      {
        label: 'Distribuição por Tipo de Combustível',
        data: [65, 25, 10],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(34, 197, 94, 0.8)',
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(34, 197, 94, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const fuelCostDistributionData = {
    labels: ['Diesel', 'Gasolina', 'Etanol'],
    datasets: [
      {
        label: 'Distribuição de Gastos',
        data: [75, 20, 5],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(34, 197, 94, 0.8)',
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(239, 68, 68, 1)',
          'rgba(34, 197, 94, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const averageRefuelsByDriverData = {
    labels: ['João', 'Maria', 'Pedro', 'Ana', 'Carlos'],
    datasets: [
      {
        label: 'Média de Abastecimentos',
        data: [12, 8, 15, 10, 9],
        backgroundColor: ['#D62B00'],
        borderColor: ['#6B1500'],
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Helmet title="Dashboard" />
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <DashboardFilters />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <CardChart
            title="Faturamento total"
            value="R$ 45.231,00"
            description="+20.1% em relação ao mês anterior"
            icon={<DollarSign className="h-4 w-4" />}
            delay={0.1}
          />
          <CardChart
            title="Maior Abastecimento"
            value="Placa: ABC-1234"
            description="350L no último abastecimento"
            icon={<Car className="h-4 w-4" />}
            delay={0.2}
          />
          <CardChart
            title="Maior Média de Consumo"
            value="3.8 KM/L"
            description="Placa: ABC-1234"
            icon={<TrendingUp className="h-4 w-4" />}
            delay={0.3}
          />
          <CardChart
            title="Menor Média de Consumo"
            value="2.8 KM/L"
            description="Placa: XYZ-9876"
            icon={<TrendingDown className="h-4 w-4" />}
            delay={0.4}
          />
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <div className="rounded-lg border border-[#1F1F1F] p-6 shadow-lg transition-all duration-200 hover:shadow-xl dark:shadow-primary/5">
            <BarChart
              data={vehicleEfficiencyData}
              title="Ranking de Eficiência por Veículo (KM/L)"
            />
          </div>
          <div className="rounded-lg border border-[#1F1F1F] p-6 shadow-lg transition-all duration-200 hover:shadow-xl dark:shadow-primary/5">
            <BarChart
              data={averageRefuelsByDriverData}
              title="Média de Abastecimentos por Motorista"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <div className="rounded-lg border border-[#1F1F1F] p-6 shadow-lg transition-all duration-200 hover:shadow-xl dark:shadow-primary/5">
            <PieChart
              data={fuelTypeDistributionData}
              title="Distribuição por Tipo de Combustível"
            />
          </div>
          <div className="rounded-lg border border-[#1F1F1F] p-6 shadow-lg transition-all duration-200 hover:shadow-xl dark:shadow-primary/5">
            <PieChart
              data={fuelCostDistributionData}
              title="Distribuição de Gastos por Combustível"
            />
          </div>
        </div>

        <div className="mt-8">
          <div className="mb-4 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <h2 className="text-xl font-semibold dark:text-white-500">
              Abastecimentos Suspeitos
            </h2>
          </div>
          <div className="rounded-lg border border-[#1F1F1F] p-6 shadow-lg">
            <SuspiciousRefuelsTable refuels={suspiciousRefuels} />
          </div>
        </div>
      </div>
    </div>
  )
}
