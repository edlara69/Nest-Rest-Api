import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IpModule } from './ip/ip.module'; 
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [IpModule,MongooseModule.forRoot('mongodb://localhost/ip-nest',{
    useNewUrlParser: true

  
})],
   
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
