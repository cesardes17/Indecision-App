import { mount } from '@vue/test-utils';
import MyCounter from '@/components/MyCounter.vue';
import { test, describe, expect } from 'vitest';

describe('<MyCounter />', () => {
  test('should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 10,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('renders the counter value correctly', () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value,
      },
    });

    // expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`);

    // expect(wrapper.find('[data-testid="square-label"]').text()).toContain(
    //   `Square: ${value * value}`,
    // );

    const [counter, square] = wrapper.findAll('h3');

    expect(counter?.text()).toContain(`Counter: ${value}`);
    expect(square?.text()).toContain(`Square: ${value * value}`);
  });

  test('increments the counter when the button is clicked', async () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value,
      },
    });

    const [increaseBtn] = wrapper.findAll('button');
    await increaseBtn?.trigger('click');

    const [counter, square] = wrapper.findAll('h3');

    expect(counter?.text()).toContain(`Counter: ${value + 1}`);
    expect(square?.text()).toContain(`Square: ${(value + 1) * (value + 1)}`);
  });

  test('decrements the counter when the button is clicked twice', async () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value,
      },
    });
    const [, decreaseBtn] = wrapper.findAll('button');

    await decreaseBtn?.trigger('click');
    await decreaseBtn?.trigger('click');

    const [counter, square] = wrapper.findAll('h3');

    expect(counter?.text()).toContain(`Counter: ${value - 2}`);
    expect(square?.text()).toContain(`Square: ${(value - 2) * (value - 2)}`);
  });
});
