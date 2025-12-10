import z from 'zod'

const facturasIdSchema = z.object({
  id: z.string().min(1)
})

const facturasfacturaIdSchema = z.object({
  id: z.string().min(1), 
  nombre: z.string().min(1)
})

export function validateFacturastId (input) {
  return facturasIdSchemaIdSchema.safeParse(input)
}
export function validateFacturafacturaId (input) {
  return facturasfacturaIdSchema.safeParse(input)
}

export function errorFlattenError (result){
  return z.flattenError(result)
}

