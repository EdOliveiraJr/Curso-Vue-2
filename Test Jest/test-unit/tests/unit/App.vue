<template>
    <button @click="increment"> + </button>
    <div v-if="count % 2 === 0">
      Count: {{ count }}. Count is even.
    </div>
    <div v-if="count % 2 !== 0">
      Count: {{ count }}. Count is odd.
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const count = computed(()=> store.state.count)
    const increment = () => {
      store.commit('increment')
    }
    return {
      count,
      increment
    }
  }
}
</script>