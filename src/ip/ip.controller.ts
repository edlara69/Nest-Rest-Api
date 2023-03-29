import { Controller, Get, Post, Put, Delete, Res,HttpStatus,Body,Ip, Param, NotFoundException,Query} from '@nestjs/common';

import { CreateIpDTO } from './dto/ip.dto';
import { IpService } from './ip.service';

@Controller('ip')
export class IpController {

    constructor(private IpService: IpService){}

    @Post('/create')
    async createPost(@Res()res, @Body() createIpDTO: CreateIpDTO){
       
       const ip= await this.IpService.createIp(createIpDTO);
        return res.status(HttpStatus.OK).json({
            messagge: 'Ip creada con exito',
            ip: ip
        })
    }

    
    @Get('/')
    async getIps(@Res()res){
       
       const ips= await this.IpService.getIps();
       return res.status(HttpStatus.OK).json({
            ips: ips
        })
    }

    @Get('/:ipID')
    async getIp(@Res()res, @Param('ipID') ipID){
    const ip = await this.IpService.getIp(ipID);
    if (!ip) throw new NotFoundException ('La ip no existe');
    return res.status(HttpStatus.OK).json(ip);

    }

    @Delete('/delete')
    async deleteIp(@Res()res, @Query('ipID')ipID){
    const ipDeleted = await this.IpService.deleteIp(ipID);
    if (!ipDeleted) throw new NotFoundException ('La ip no existe');
    return res.status(HttpStatus.OK).json({
        message: 'Ip borrada exitosamente',
        ipDeleted
    });
 
    }

    @Put('/update')
    async updateIp(@Res()res, @Body() CreateIpDTO: CreateIpDTO, @Query
        ('ipID')ipID){
        const updateIp = await this.IpService.updateIp(ipID,CreateIpDTO);
        if(!updateIp) throw new NotFoundException ('La ip no existe');
        return res.status(HttpStatus.OK).json({
            message: 'Ip actualizada correctamente',
            updateIp
        });
    }


  

        





}
