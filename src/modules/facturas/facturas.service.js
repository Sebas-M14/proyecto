import { FacturasModel } from './facturas.model.js'
import { FacturasError } from './facturas.error.js'

export class FacturasService {
    
    static async consultar (){
        const result = await FacturasModel.buscarUsuariosPorNombre()    
        return result
    }

    static async consultarPorId ({id}){
        const result = await FacturasModel.buscarUsuariosPorId({id})    
        return result
    }

    static async actualizarNombrePorId ({nombre, id}){

        //Verificar si existe el usuario
        const result = await UsuariosModel.existeUsuarioPorId({ id })  
        if(!result){ throw new FacturasError("El usuario no existe", 401) }
        
        //Actualizar el nombre del usuario
        const actualizacion = await UsuariosModel.actualizarNombrePorId({ nombre, id })
        if(!actualizacion.status){ throw new UsuariosError(actualizacion.message, 401) }
        
        //Obtener la informacion del usuario
        const info = await UsuariosModel.buscarUsuariosPorId({id})    
        return info
    }

    static async eliminarPorId ({id}){

        //Verificar si existe el usuario
        const result = await UsuariosModel.existeUsuarioPorId({ id })  
        if(!result){ throw new UsuariosError("El usuario no existe", 401) }
        
        // Eliminar el usuario por id
        const eliminar = await UsuariosModel.eliminarPorId({ id })
        if(!eliminar.status){ throw new UsuariosError(eliminar.message, 401) }
          
        return {id: id, message: eliminar.message}
    }
}

