import {Body,Controller,Get,Post,Query,Param,Req,Res} from "@nestjs/common";

@Controller('Parametros')
export  class ParametrosController{
    @Post ('devolver/:id') //va el url
    devolverParametros(
        @Req() request,
        @Res() response,
        @Query() queryParams,
        @Body() bodyParams,
        @Param () paramsParams,
    ){
        const  respuesta ={
            queryParams:queryParams,
            bodyParams:bodyParams,
            paramsParams:paramsParams
        };
        return response.send(respuesta);
    }
    @Get ('ReqRes')
    requestResponse(
        @Req() Request,
        @Res() Response
    ){
        const respuesta={
            baseUrl:request.baseUrl,
            hostname:request.hostname,
            ip:request.ip,
            subdomains:request.subdomins,
            method:request.Method,

        };
        return reponse.send(respuesta);
    }


}