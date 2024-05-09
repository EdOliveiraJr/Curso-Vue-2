<template>
    <button @click="handleClick"></button>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    handleClick(){
      this.count++
      this.$emit('count', this.count)
    }
  },
}
</script>