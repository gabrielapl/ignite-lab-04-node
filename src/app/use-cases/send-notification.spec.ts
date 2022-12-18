import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notifications';
import { SendNotification } from './send-notification';

describe('send notification', () => {
  it('should be able to send notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();

    const sendNotification = new SendNotification(notificationRepository);

    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'Nova solicitação de amizade',
      recipientId: 'exemple-recipient-id',
    });

    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
});
