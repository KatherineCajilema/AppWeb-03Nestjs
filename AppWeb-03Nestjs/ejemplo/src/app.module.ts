import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {UsuarioController} from "./usuario.controller";
import {ParametrosController} from "./parametros.controller";

@Module({
    imports: [ // OtrosModulos
    ],
    controllers: [ // Controladores
        AppController,
        UsuarioController,
        ParametrosController
    ],
    components: [

    ],
})
export class AppModule {
}