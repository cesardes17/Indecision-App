import { useChat } from '@/composables/useChat';
import { vi } from 'vitest';

describe('useChat', () => {
  test('add message correctly when onMessage is called', async () => {
    const text = 'Hola mundo';
    const { messages, handleSendMessage } = useChat();
    await handleSendMessage(text);

    expect(messages.value.length).toBe(1);

    expect(messages.value[0]).toEqual({
      id: expect.any(Number),
      message: text,
      itsMine: true,
    });
  });
  test('do nothing if text is empty', async () => {
    const text = '';
    const { messages, handleSendMessage } = useChat();
    await handleSendMessage(text);

    expect(messages.value.length).toBe(0);
  });

  test('gets response correctly when message ends with question mark', async () => {
    const text = '¿Quieres café?';

    const { messages, handleSendMessage } = useChat();
    await handleSendMessage(text);

    await new Promise((resolve) => setTimeout(resolve, 2100));

    const [myMessage, botMessage] = messages.value;

    expect(messages.value.length).toBe(2);

    expect(myMessage).toEqual({
      id: expect.any(Number),
      message: text,
      itsMine: true,
    });

    expect(botMessage).toEqual({
      id: expect.any(Number),
      message: expect.any(String),
      itsMine: false,
      image: expect.any(String),
    });
  });

  test('mock response - fetch api', async () => {
    const mockResponse = {
      answer: 'yes',
      image: 'example.jpg',
    };

    (window as any).fetch = vi.fn(async () => ({
      json: async () => mockResponse,
    }));

    const text = '¿Quieres café?';

    const { messages, handleSendMessage } = useChat();

    await handleSendMessage(text);

    await new Promise((resolve) => setTimeout(resolve, 1600));

    const [, botMessage] = messages.value;

    expect(botMessage).toEqual({
      id: expect.any(Number),
      message: mockResponse.answer,
      itsMine: false,
      image: mockResponse.image,
    });
  });
});
