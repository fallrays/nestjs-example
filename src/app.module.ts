import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
import { typeOrmConfig } from './configs/typeorm.config';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './logger/logger.middleware';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ['.env']
        }),
        TypeOrmModule.forRoot(typeOrmConfig),
        BoardsModule,
        UsersModule
    ],
    controllers: [],
    providers: [],
})

export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes('*');
            // .forRoutes('users'); //users 경로에만 등록
            // .forRoutes({ path: 'users', method: RequestMethod.GET }); //users 경로에서 GET 요청에만 등록
            // .forRoutes({ path: 'ab*cd', method: RequestMethod.ALL }); //패턴 기반 경로
    }
}
