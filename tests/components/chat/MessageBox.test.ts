import MessageBox from '@/components/chat/MessageBox.vue';
import { mount } from '@vue/test-utils';

describe('<MessageBox />', () => {
  const wrapper = mount(MessageBox);

  test('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button svg').exists()).toBe(true);
  });

  test('emits sendMessage event when button is clicked with message value', async () => {
    const message = 'Hola Mundo!';

    const input = wrapper.find('input[type="text"]');
    await input.setValue(message);
    const sendButton = wrapper.find('button');

    await sendButton.trigger('click');

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);

    expect((wrapper.vm as any).newMessage).toBe('');
  });

  test('emits sendMessage event when keypress.enter is triggered with message value', async () => {
    const message = 'Hola Mundo!';

    const input = wrapper.find('input[type="text"]');
    await input.setValue(message);
    await input.trigger('keypress.enter');

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);

    expect((wrapper.vm as any).newMessage).toBe('');
  });

  test('emits sendMessage event when keypress.enter is triggered with message value', async () => {
    const wrapper = mount(MessageBox);

    const message = '';

    const input = wrapper.find('input[type="text"]');
    const sendButton = wrapper.find('button');

    await input.setValue(message);
    await input.trigger('keypress.enter');
    await sendButton.trigger('click');

    expect(wrapper.emitted('sendMessage')).toBeFalsy();
  });
});
