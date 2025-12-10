import { Router } from 'express'
import { FacturasController } from './facturas.controller.js'
import { authCookieMiddleware } from '../../core/middlewares/authCookie.js';

export const facturasRouter = () => {
  
    const facturasRouter = Router()
    const facturasController = new FacturasController()
 
    facturasRouter.get('/consultar', authCookieMiddleware, facturasController.consultar)
    facturasRouter.put('/editar', authCookieMiddleware, facturasController.editar)
    facturasRouter.delete('/eliminar', authCookieMiddleware, facturasController.eliminar)
   
    return facturasRouter
}
