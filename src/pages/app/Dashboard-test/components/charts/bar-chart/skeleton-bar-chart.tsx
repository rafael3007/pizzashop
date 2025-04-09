import { Skeleton } from '@/components/ui/skeleton'

export default function SkeletonBarChart({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 rounded-md">
      <h1 className="text-black-500 dark:text-white-500">{title}</h1>
      <div className="flex items-center justify-center">
        <div>
          <div className="flex gap-1">
            <Skeleton className="h-80 w-5 bg-slate-300" /> {/* Gráfico fake */}
            <Skeleton className="ml-1 h-80 w-96 bg-slate-300" />{' '}
            {/* Gráfico fake */}
          </div>
          <Skeleton className="ml-7 mt-1.5 h-5 w-96 bg-slate-300" />{' '}
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
