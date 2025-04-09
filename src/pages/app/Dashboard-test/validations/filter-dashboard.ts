import { z } from 'zod'
// Esquema de validação com Zod
export const filtersSchema = z.object({
  empresa: z.string().optional(),
  motorista: z.string().optional(),
  veiculo: z.string().optional(),
  combustivel: z.string().optional(),
  data: z.date().optional(),
})

export type FiltersFormValues = z.infer<typeof filtersSchema>
