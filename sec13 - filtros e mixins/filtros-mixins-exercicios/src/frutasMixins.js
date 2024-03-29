export default {
    data() {
        return {
            fruta: '',
            frutas: ['laranja','banana', 'uva']
        }
    },
    methods:{
        add(){
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    }
}