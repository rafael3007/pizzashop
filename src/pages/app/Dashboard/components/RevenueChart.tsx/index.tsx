import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import Colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const data = [
  {
    date: '10/12',
    revenue: 1200,
  },
  {
    date: '11/12',
    revenue: 200,
  },
  {
    date: '12/12',
    revenue: 1300,
  },
  {
    date: '13/12',
    revenue: 1600,
  },
  {
    date: '14/12',
    revenue: 400,
  },
  {
    date: '16/12',
    revenue: 500,
  },
  {
    date: '17/12',
    revenue: 1200,
  },
  {
    date: '18/12',
    revenue: 1200,
  },
]

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no periodo
          </CardTitle>
          <CardDescription>Receita diária no periodo</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
              width={80}
            />
            <XAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              dataKey={'date'}
              dy={16}
            />
            <CartesianGrid vertical={false} className="stroke-muted" />
            <Line
              type="linear"
              strokeWidth={2}
              dataKey={'revenue'}
              stroke={Colors.violet['500']}
            />
            <Tooltip active={false} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
