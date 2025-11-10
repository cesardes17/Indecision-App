<template>
  <h3>Counter: {{ counter }}</h3>
  <h3>Square: {{ square }}</h3>

  <div>
    <button @click="counter++"> +1 </button>
    <button @click="counter--"> -1 </button>
  </div>
</template>

<script lang="ts">
import { useCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue';


export default defineComponent({
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  setup({ value }) {
    const { counter, square } = useCounter(value)
    return {
      counter, square
    }
  }
})


</script>
