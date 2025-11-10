<template>
  <h3>Counter: {{ counter }}</h3>
  <h3 data-testid="square-label">Square: {{ square }}</h3>

  <div>
    <button class="btn" @click="counter++"> +1 </button>
    <button class="btn" @click="counter--"> -1 </button>
  </div>
</template>

<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

interface Props {
  value: number
}
const props = defineProps<Props>();

const { counter, square } = useCounter(props.value);



</script>


<style scoped>
@reference "tailwindcss";

.btn {
  @apply p-2 bg-blue-500 hover:bg-blue-700 rounded mr-2;
}
</style>
