import { Skeleton } from '@/components/ui/skeleton'

export default function SkeletonPieChart({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 rounded-md">
      <h1 className="text-black-500 dark:text-white-500">{title}</h1>
      <div className="flex items-center justify-center">
        <div className="flex gap-1">
          <Skeleton className="ml-1 h-56 w-56 rounded-full bg-slate-300" />{' '}
          {/* Gráfico fake */}
        </div>
        <div className="ml-4 flex flex-col justify-center space-y-2">
          {/* Skeletons para a legenda */}
          <Skeleton className="h-12 w-24 bg-slate-300" />
        </div>
      </div>
    </div>
  )
}
