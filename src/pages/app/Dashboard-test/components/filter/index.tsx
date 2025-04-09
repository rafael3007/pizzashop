import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { CalendarIcon, X } from 'lucide-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { CalendarDay } from '@/components/ui/calendarDay'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

import {
  FiltersFormValues,
  filtersSchema,
} from '../../validations/filter-dashboard'

const fuelTypes = [
  'GASOLINA',
  'GASOLINA ADITIVADA',
  'ETANOL',
  'DIESEL',
  'DIESEL S10',
  'FLEX',
]

export function DashboardFilters() {
  const [searchParams, setSearchParams] = useSearchParams()

  const { handleSubmit, setValue, watch, reset } = useForm<FiltersFormValues>({
    resolver: zodResolver(filtersSchema),
    defaultValues: {
      empresa: searchParams.get('empresa') || '',
      motorista: searchParams.get('motorista') || '',
      veiculo: searchParams.get('veiculo') || '',
      combustivel: searchParams.get('combustivel') || '',
      data: searchParams.get('data')
        ? new Date(searchParams.get('data')!)
        : undefined,
    },
  })

  const date = watch('data')

  const onSubmit = (data: FiltersFormValues) => {
    const params = new URLSearchParams()

    if (data.empresa && data.empresa !== 'all')
      params.set('empresa', data.empresa)
    if (data.motorista && data.motorista !== 'all')
      params.set('motorista', data.motorista)
    if (data.veiculo && data.veiculo !== 'all')
      params.set('veiculo', data.veiculo)
    if (data.combustivel && data.combustivel !== 'all')
      params.set('combustivel', data.combustivel)
    if (data.data) params.set('data', data.data.toISOString())

    setSearchParams(params)
  }

  useEffect(() => {
    reset({
      empresa: searchParams.get('empresa') || '',
      motorista: searchParams.get('motorista') || '',
      veiculo: searchParams.get('veiculo') || '',
      combustivel: searchParams.get('combustivel') || '',
      data: searchParams.get('data')
        ? new Date(searchParams.get('data')!)
        : undefined,
    })
  }, [searchParams, reset])

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-wrap items-end gap-4 rounded-lg bg-card p-4"
    >
      <div>
        <label className="block text-sm font-medium text-black-500 dark:text-white-500">
          Empresa
        </label>
        <Select
          onValueChange={(value) => setValue('empresa', value)}
          defaultValue={searchParams.get('empresa') || ''}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Selecione a empresa" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            <SelectItem value="empresa1">Empresa 1</SelectItem>
            <SelectItem value="empresa2">Empresa 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium text-black-500 dark:text-white-500">
          Motorista
        </label>
        <Select
          onValueChange={(value) => setValue('motorista', value)}
          defaultValue={searchParams.get('motorista') || ''}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Selecione o motorista" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="joao">João</SelectItem>
            <SelectItem value="maria">Maria</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium text-black-500 dark:text-white-500">
          Veículo
        </label>
        <Select
          onValueChange={(value) => setValue('veiculo', value)}
          defaultValue={searchParams.get('veiculo') || ''}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Selecione o veículo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="abc1234">ABC-1234</SelectItem>
            <SelectItem value="xyz9876">XYZ-9876</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium text-black-500 dark:text-white-500">
          Combustível
        </label>
        <Select
          onValueChange={(value) => setValue('combustivel', value)}
          defaultValue={searchParams.get('combustivel') || ''}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Selecione o combustível" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            {fuelTypes.map((fuelType: string) => (
              <SelectItem key={fuelType} value={fuelType}>
                {fuelType}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium text-black-500 dark:text-white-500">
          Período
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={'outline'}
              className={cn(
                'w-[200px] justify-start text-left font-normal',
                !date && 'text-black-500 dark:text-white-500',
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, 'dd/MM/yyyy') : <span>Período</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <CalendarDay
              mode="single"
              selected={date}
              onSelect={(selectedDate) => setValue('data', selectedDate)}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <Button type="submit">Aplicar Filtros</Button>
      <Button
        variant="outline"
        onClick={() => {
          reset()
          setSearchParams(new URLSearchParams())
        }}
        className="flex items-center gap-2"
      >
        <X className="h-4 w-4" /> Limpar filtros
      </Button>
    </form>
  )
}
