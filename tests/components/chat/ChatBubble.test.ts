import ChatBubble from '@/components/chat/ChatBubble.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

describe('<ChatBubble />', () => {
  test('renders own message correctly', () => {
    const message = 'Hola Mundo';

    const wrapper = mount(ChatBubble, {
      props: {
        message,
        itsMine: true,
      },
    });

    const ownBubbleMessage = wrapper.find('.bg-blue-200');
    expect(ownBubbleMessage.exists()).toBeTruthy(); // o toBe(true)
    expect(ownBubbleMessage.text()).toContain(message);

    const otherBubbleMessage = wrapper.find('.bg-gray-300');
    expect(otherBubbleMessage.exists()).toBeFalsy();
  });

  test('renders other user message correctly', () => {
    const message = 'Hola Mundo';

    const wrapper = mount(ChatBubble, {
      props: {
        message,
        itsMine: false,
      },
    });

    const ownBubbleMessage = wrapper.find('.bg-blue-200');
    expect(ownBubbleMessage.exists()).toBe(false); // o toBeFalsy()

    const otherBubbleMessage = wrapper.find('.bg-gray-300');
    expect(otherBubbleMessage.exists()).toBe(true);
    expect(otherBubbleMessage.text()).toContain(message);

    const img = wrapper.find('img');
    expect(img.exists()).toBe(false);
  });

  test('renders other user message correctly with image', () => {
    const message = 'Hola Mundo';
    const image = 'example.png';
    const wrapper = mount(ChatBubble, {
      props: {
        message,
        itsMine: false,
        image,
      },
    });

    const ownBubbleMessage = wrapper.find('.bg-blue-200');
    expect(ownBubbleMessage.exists()).toBe(false); // o toBeFalsy()

    const otherBubbleMessage = wrapper.find('.bg-gray-300');
    expect(otherBubbleMessage.exists()).toBe(true);
    expect(otherBubbleMessage.text()).toContain(message);

    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBe(image);
  });
});
