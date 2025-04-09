import { motion } from 'framer-motion'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

interface KPICardProps {
  title: string
  value?: string | number
  icon: React.ReactNode
  description?: string
  delay?: number
}

export function CardChart({
  title,
  value,
  icon,
  description,
  delay = 0,
}: KPICardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden border-[#1F1F1F] transition-all duration-200 hover:shadow-lg dark:bg-[#0A0A0A] dark:hover:shadow-primary/10">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-black-500 dark:text-white-500">
            {title}
          </CardTitle>
          <motion.div whileHover={{ scale: 1.2 }} className="text-primary">
            {icon}
          </motion.div>
        </CardHeader>
        <CardContent>
          {value ? (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: delay + 0.2 }}
              className="text-2xl font-bold text-foreground"
            >
              {value}
            </motion.div>
          ) : (
            <Skeleton className="h-8 w-4/5 bg-slate-300" />
          )}
          {description ? (
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: delay + 0.4 }}
              className="mt-2 text-xs text-black-500 dark:text-white-500"
            >
              {description}
            </motion.p>
          ) : (
            <Skeleton className="mt-2 h-5 w-3/5 bg-slate-300" />
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}
