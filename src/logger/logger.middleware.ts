import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {

    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.originalUrl}`);
    res.on('finish', () => {
      console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.originalUrl} ${res.statusCode}`);
    });

    next();
  }
}
