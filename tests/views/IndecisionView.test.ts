import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import IndecisionView from '@/views/IndecisionView.vue';
import { mount } from '@vue/test-utils';

const mockChatMessages = {
  template: '<div data-test-id="mock-messages">Mock ChatMessages</div>',
};

describe('<IndecisionView />', () => {
  test('renders chat messages and messageBox correctly', () => {
    const wrapper = mount(IndecisionView);
    // expect(wrapper.html()).toMatchSnapshot(); // No deberia realizarse asi, ya que si se modifica un componente hijo, el snapshot fallaria
    expect(wrapper.findComponent(ChatMessages).exists()).toBe(true);
    expect(wrapper.findComponent(MessageBox).exists()).toBe(true);
  });

  test('calls onMessage when sending a message', async () => {
    const wrapper = mount(IndecisionView, {
      global: {
        stubs: {
          ChatMessages: mockChatMessages,
        },
      },
    });

    const messageBoxComponent = wrapper.findComponent(MessageBox);
    messageBoxComponent.vm.$emit('onMessage', 'Hola Mundo');

    await new Promise((resolve) => setTimeout(resolve, 150));
    console.log(wrapper.html());
  });
});
