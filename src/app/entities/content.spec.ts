import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create notification content', () => {
    const content = new Content('Voce recebeu uma solicitação de amizade.');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less when 5 characters', () => {
    expect(() => new Content('Voc')).toThrow();
  });

  it('should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
