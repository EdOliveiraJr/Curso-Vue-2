<template>
    <div>
        <ul v-for="(fruta, index) in frutas" :key="index">
            <li :style="{listStyle: 'none'}" >{{ fruta }}</li>
        </ul >
        <input v-model="fruta" @keydown.enter="add" />
    </div>
</template>
<script>
import frutasMixins from '@/frutasMixins'

export default {
    mixins:[frutasMixins]
}
</script>

<style>

    
</style>