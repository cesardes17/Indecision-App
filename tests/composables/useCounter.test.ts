import { useCounter } from '@/composables/useCounter';

describe('useCounter', () => {
  test('initiales the counter with the given initial value', () => {
    const initialValue = 10;

    const { counter, square } = useCounter(initialValue);

    expect(counter.value).toBe(initialValue);
    expect(square.value).toBe(initialValue * initialValue);
  });

  test('initializes the counter with default values', () => {
    const { counter, square } = useCounter();

    expect(counter.value).toBe(counter.value);
    expect(square.value).toBe(counter.value * counter.value);
  });

  test('should incremente the counter value', () => {
    const { counter } = useCounter();

    counter.value++;

    expect(counter.value).toBe(6);
    expect(counter.value * counter.value).toBe(36);
  });
});
