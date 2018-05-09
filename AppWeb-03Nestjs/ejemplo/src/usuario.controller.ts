import {Controller,Req,Res,Get,HttpCode,Post} from '@nestjs/common';

"@nestjs7common";
//decorator
@Controller('Usuario')
export class UsuarioController {
    usuario={
        nombre:'Kate',
        apellido:'Cajilema',
        edad:'22'
    };
    usuarios = [];
    @Get('mostrar')
    @HttpCode(201)
    mostrarUsuario(){
        return this.usuario;

    }
    @Get('mostrarExpress')
    mostrarUsuarioExpress(@Req() request,@Res() reponse){
        return reponse.status(500).send(this.usuario);

    }
    @Post('crearUsuario')
    crearUsuario(
        @Req() request,
        @Res() response
    ) {
        const nuevoUsuario = {
            nombre: request.query.nombre,
            apellido: request.query.apellido,
            edad: request.query.edad
        };

        this.usuarios.push(nuevoUsuario);

        return response
            .status(201)
            .send(nuevoUsuario);
    }


}