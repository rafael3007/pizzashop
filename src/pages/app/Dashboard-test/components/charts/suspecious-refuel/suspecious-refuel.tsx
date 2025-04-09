import { motion } from 'framer-motion'
import { Search, Table } from 'lucide-react'
import { Button } from 'react-day-picker'

import { Skeleton } from '@/components/ui/skeleton'
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { cn } from '@/lib/utils'

interface SuspiciousRefuel {
  id: string
  date: string
  driver: string
  vehicle: string
  reason: string
  amount: number
  fuelType: string
}

interface SuspiciousRefuelsTableProps {
  refuels?: SuspiciousRefuel[]
}

export function SuspiciousRefuelsTable({
  refuels,
}: SuspiciousRefuelsTableProps) {
  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader className="sticky top-0 bg-gray-50/95 backdrop-blur-sm dark:bg-gray-900/95">
          <TableRow>
            <TableHead>Data</TableHead>
            <TableHead>Motorista</TableHead>
            <TableHead>Veículo</TableHead>
            <TableHead>Motivo</TableHead>
            <TableHead>Quantidade</TableHead>
            <TableHead>Combustível</TableHead>
            <TableHead>Detalhes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {refuels ? (
            refuels.length > 0 ? (
              refuels.map((refuel, index) => (
                <motion.tr
                  key={refuel.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={cn(
                    'transition-colors hover:bg-gray-50 dark:text-white-500 dark:hover:bg-gray-800/50',
                    index % 2 === 0
                      ? 'dark:bg-transparent'
                      : 'bg-gray-50/50 dark:bg-gray-800/20',
                  )}
                >
                  <TableCell>{refuel.date}</TableCell>
                  <TableCell>{refuel.driver}</TableCell>
                  <TableCell>{refuel.vehicle}</TableCell>
                  <TableCell className="font-bold">{refuel.reason}</TableCell>
                  <TableCell>{refuel.amount}L</TableCell>
                  <TableCell>{refuel.fuelType}</TableCell>
                  <TableCell className="flex items-center justify-center">
                    <Button>
                      <Search className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </motion.tr>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center">
                  Nenhum abastecimento suspeito encontrado.
                </TableCell>
              </TableRow>
            )
          ) : (
            Array.from({ length: 5 }).map((_, index) => {
              return (
                <motion.tr
                  key={'skeleton-table-row-' + index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={cn(
                    'transition-colors hover:bg-gray-50 dark:text-white-500 dark:hover:bg-gray-800/50',
                    index % 2 === 0
                      ? 'dark:bg-transparent'
                      : 'bg-gray-50/50 dark:bg-gray-800/20',
                  )}
                >
                  <TableCell>
                    <Skeleton className="h-6 bg-slate-300" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-6 bg-slate-300" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-6 bg-slate-300" />
                  </TableCell>
                  <TableCell className="font-bold">
                    <Skeleton className="h-6 bg-slate-300" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-6 bg-slate-300" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-6 bg-slate-300" />
                  </TableCell>
                  <TableCell className="flex items-center justify-center">
                    <Button disabled className="cursor-not-allowed">
                      <Search className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </motion.tr>
              )
            })
          )}
        </TableBody>
      </Table>
    </div>
  )
}
