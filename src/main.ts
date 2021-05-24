import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export function bootstrap(): Promise<INestApplication> {
  return NestFactory.create(AppModule);
}
