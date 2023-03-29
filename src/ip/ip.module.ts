import { Module } from '@nestjs/common';
import { IpController } from './ip.controller';
import { IpService } from './ip.service';
import { MongooseModule } from '@nestjs/mongoose';
import { IpSchema } from './schemas/ip.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Ip',schema: IpSchema}
    ])

  ],
  controllers: [IpController],
  providers: [IpService]
})
export class IpModule {}
