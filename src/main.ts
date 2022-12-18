import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as passport from 'passport';

import { environment } from './environment/environment';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //await app.listen(3000);

  /*app.setGlobalPrefix('api');
  //passport sessions
  app.use(passport.initialize());
  app.use(passport.session());
*/
  const apiPort = environment.apiPort;
  await app.listen(apiPort, () => {
    console.log('Listening at http://localhost:', apiPort);
  });

}
bootstrap();
