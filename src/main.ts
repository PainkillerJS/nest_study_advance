import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder().setTitle("Documentation").setDescription("Для уроков").setVersion("1.0.0").addTag("Yuriy").build();

  const documentSwagger = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("/api/docs", app, documentSwagger);

  await app.listen(process.env.PORT || 3000, () => console.log(`Server is start on ${process.env.PORT} port`));
}
bootstrap();
