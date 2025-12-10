import { validateFacturasId, validateFacturasfacturaId, errorFlattenError} from './facturas.schema.js'
import { FacturasService } from './facturas.service.js'

export class FacturasController {

  consultar = async (req, res, next) => {

    try {

      const { id } = req.body;

      let resultado;

      if (id) {
        
        const result = validatefacturasId(req.body)
        if (!result.success) {return res.status(400).json({ status: "error_bad_request ", error: errorFlattenError(result.error)})}
        resultado = await FacturasService.consultarPorId({id})

      } else {
        resultado = await FacturasService.consultar()
      }

      res.status(201).json({
        status: "success", 
        usuarios: resultado
      })

    } catch (error) {
      next(error)
    }

  }

  editar = async (req, res, next) => {

    try {

      const result = validatefacturasfacturaId(req.body)
      if (!result.success) {return res.status(400).json({ status: "error_bad_request ", error: errorFlattenError(result.error)})}
      
      const { nombre, id} = req.body
      const resultado = await UsuariosService.actualizarNombrePorId({nombre, id})

      res.status(201).json({
        status: "success", 
        usuarios: resultado
      })

    } catch (error) {
      next(error)
    }

  }

  eliminar = async (req, res, next) => {

    try {

      const result = validatefacturasId(req.body)
      if (!result.success) {return res.status(400).json({ status: "error_bad_request ", error: errorFlattenError(result.error)})}
      
      const {id} = req.body
      const resultado = await FacturasServiceService.eliminarPorId({id})

      res.status(201).json({
        status: "success", 
        usuario: resultado
      })

    } catch (error) {
      next(error)
    }

  }

}

