import { useCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
  setup({ value }) {
    const { counter, square } = useCounter(value);
    return {
      counter,
      square,
    };
  },
});
