import { Helmet } from 'react-helmet-async'

import DayOrdersAmountCard from './components/DayOrdersAmountCard'
import MonthCanceledOrdersAmountCard from './components/MonthCanceledOrdersAmountCart'
import MonthOrdersAmountCard from './components/MonthOrdersAmountCard'
import MonthRevenueCard from './components/MonthRevenueCard'
import { PopularProductsChart } from './components/PopularProductsCharts/index.tsx'
import { RevenueChart } from './components/RevenueChart.tsx'

export default function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>
        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
          <div className="col-span-"></div>
        </div>
      </div>
    </>
  )
}
