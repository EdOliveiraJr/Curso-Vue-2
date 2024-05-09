<template>
  <div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Fetcher',
  mounted() {
    axios.get('/');
  }
}
</script>