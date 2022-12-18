import { Module } from '@nestjs/common';
import { NotificationsRepositories } from 'src/app/repositories/notifications-repositories';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationRepository } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepositories,
      useClass: PrismaNotificationRepository,
    },
  ],
  exports: [NotificationsRepositories],
})
export class DatabaseModule {}
