<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="mensagem in mensagens" 
			:key="mensagem.texto" 
			:variant="mensagem.tipo"
			>{{ mensagem.texto }}
		</b-alert>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input type="text" size="lg"
					v-model="usuario.nome"
					placeholder="Insira seu nome">
				</b-form-input>
			</b-form-group>
			<b-form-group label="E-mail:">
				<b-form-input type="email" size="lg"
					v-model="usuario.email"
					placeholder="Insira seu e-mail">
				</b-form-input>
			</b-form-group>
			<hr>
			<b-button  @click="salvar" size="lg" variant="primary">Salvar</b-button>
			<b-button class="ml-2" @click="mostraUsuarios" size="lg" variant="success">Mostra usuários</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id" >
				<strong>Id: </strong>{{ id }} <br>
				<strong>Nome: </strong>{{ usuario.nome }} <br>
				<strong>E-mail: </strong>{{ usuario.email }} <br>
				<hr>
				<b-button  @click="carregar(id)" size="lg" variant="warning">Carregar</b-button>
				<b-button class="ml-2" @click="excluir(id)" size="lg" variant="danger">Exluir</b-button>			
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			mensagens: [],
			usuarios: [],
			id: null,
			usuario: {
				nome: '',
				email: '',
			}
		}
	},
	methods:{
		limpar(){
			this.mensagens = []
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null
		},
		salvar() {
			const method = this.id ? 'patch' : 'post'
			const finalUrl = this.id ?  `/${this.id}.json` : '.json'
			this.$http[method](`usuarios/${finalUrl}`, this.usuario)
			.then( () => { 
				this.limpar() 
				this.mensagens.push({
					texto: 'Usuário salvo com sucesso!',
					tipo: 'success' 
				})
			} )
		},
		mostraUsuarios() {
			this.$http.get('usuarios.json')
			.then(resp => {
 				this.usuarios = resp.data
			})
		},
		carregar(id){
			this.id = id
			this.usuario = { ...this.usuarios[id] }
		},
		excluir(id){
			this.$http.delete(`/usuarios/${id}.json`)
			.then( () => { this.limpar() } )
			.catch( err => {
				this.limpar()
				this.mensagens.push({
					texto: 'Erro ao excluir!',
					tipo: 'danger' 
				})
			})
		}
	}
}	
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
