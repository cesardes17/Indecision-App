import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { mount } from '@vue/test-utils';
import { vi } from 'vitest';

const messages: ChatMessage[] = [
  { id: 1, message: 'Hola Mundo', itsMine: true },
  { id: 2, message: 'Hola Cesar', itsMine: false, image: 'http://hola-mundo.jpg' },
];

describe('<ChatMessage />', () => {
  const wrapper = mount(ChatMessages, {
    props: {
      messages,
    },
  });

  test('renders chat message correctly', () => {
    const chatBubbles = wrapper.findAllComponents({ name: 'ChatBubble' });

    expect(chatBubbles.length).toBe(messages.length);
  });

  test('scrolls down to the bottom after messafes update', async () => {
    const scrollToMock = vi.fn();

    const chatRef = wrapper.vm.$refs.chatRef as HTMLDivElement;

    chatRef.scrollTo = scrollToMock;

    await wrapper.setProps({
      messages: [...messages, { id: 3, message: 'Nuevo mensaje', itsMine: true }],
    });

    await new Promise((resolve) => setTimeout(resolve, 150));

    expect(scrollToMock).toHaveBeenCalled();
    expect(scrollToMock).toHaveBeenCalledWith({ top: expect.any(Number), behavior: 'smooth' });
  });
});
