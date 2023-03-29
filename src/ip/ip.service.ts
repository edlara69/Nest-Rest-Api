import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {Ip} from './interfaces/ip.interface'
import { CreateIpDTO } from './dto/ip.dto';




@Injectable()
export class IpService {
    constructor(@InjectModel('Ip') private readonly ipModel: Model<Ip>){ }

    async getIps(): Promise <Ip[]>{
        const ips = await this.ipModel.find();
        return ips;
    }
    async getIp(ipID: string): Promise <Ip>{
        const ip = await this.ipModel.findById(ipID);
        return ip;

    }
    async createIp(createIpDTO: CreateIpDTO):Promise<Ip>{
        const ip=new this.ipModel(createIpDTO);
        return await ip.save();

    }
    async deleteIp(ipID: string): Promise <Ip>{
        const deleteIp = await this.ipModel.findByIdAndDelete(ipID);
        return deleteIp;

    }
    async updateIp(ipID: string, createIpDTO: CreateIpDTO): Promise <Ip>{
        const updateIp = await this.ipModel.findByIdAndUpdate(ipID, createIpDTO, {new: true});
        return updateIp

    }




    }



