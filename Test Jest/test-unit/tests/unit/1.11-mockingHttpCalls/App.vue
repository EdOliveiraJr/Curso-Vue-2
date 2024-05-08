<template>
    <button @click="increment"> + </button>
    <div v-if="count % 2 === 0">
      Count: {{ count }}. Count is even.
    </div>
    <div v-if="count % 2 !== 0">
      Count: {{ count }}. Count is odd.
    </div>
    <Fetcher/>
</template>

<script>
import Fetcher from './Fetcher.vue';

export default {
  components:{ Fetcher },
  computed: {
    count(){
      return this.$store.state.count
    }
  },
  methods: {
    increment(){
      this.$store.commit('increment')
    }
  },
}
</script>