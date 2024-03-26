<template>
    <div class="contador">
        <span>{{ contador }}</span>
        <button @click="adicionar">+</button>
        <button @click="subtrair">-</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contador: 0
        }
    },
    methods: {
        adicionar(){
            this.contador++
        },
        subtrair(){
            this.contador--
        }
    }
}
</script>

<style  scoped>
    .contador {
        display: flex;
        align-items: center;
        justify-items: center;
    }
    button {
        height: 30px;
        width: 30px;
        border-radius: 15px;
        margin: 5px;
        background-color: lightgreen;
        border: none;
    }

    span {
        font-size: xx-large;
        height: 30px;
        width: 30px;
        border-radius: 15px;
        margin: 5px;
        border: none;
    }
</style>