import Vue from 'vue';
import Router from 'vue-router'

import Inicio from './components/Inicio.vue';
import Menu from './components/template/Menu.vue'

// import Usuario from './components/usuario/Usuario.vue';
// import UsuarioEditar from './components/usuario/UsuarioEditar.vue';
// import UsuarioDetalhe from './components/usuario/UsuarioDetalhe.vue';
// import UsuarioLista from './components/usuario/UsuarioLista.vue';

const Usuario = () => import(/* webpackChunkName:"usuario" */ './components/usuario/Usuario.vue')
const UsuarioLista = () => import(/* webpackChunkName:"usuario" */ './components/usuario/UsuarioLista.vue')
const UsuarioDetalhe = () => import(/* webpackChunkName:"usuario" */ './components/usuario/UsuarioDetalhe.vue')
const UsuarioEditar = () => import(/* webpackChunkName:"usuario" */ './components/usuario/UsuarioEditar.vue')

Vue.use(Router)

const router = new Router ({
    mode: 'history',
    scrollBehavior(to, from, savePosition){
        if(savePosition){
            return savePosition
        }
        else if(to.hash) {
            return { selector: to.hash}
        }
        else {
            return { x: 0, y: 0 }
        }
        // return {
        //     x: 0,
        //     y: 1000
        // }
    },
    routes: [
        {
            name: 'inicio',
            path: '/',
            // component: Inicio,
            components: {
                default: Inicio,
                menu: Menu,
            }
        },
        {
            path: '/usuario',
            // component: Usuario,
            components: {
                default: Usuario,
                menu: Menu,
            },
            props: true,
            children: [
                {path: '', component: UsuarioLista, props: true},
                {path: ':id', component: UsuarioDetalhe, props: true, 
                    beforeEnter: (to, from, next ) =>{
                        console.log('antes da rota - usuario detalhe')
                        next()
                    }
                },
                {path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario'},
            ]
        },
        {
            path: '/redirecionar',
            redirect: '/usuario' 
        },
        {
            path: '*',
            redirect: '/' 
        },

    ]
})

router.beforeEach((to, from, next) =>{
    console.log('antes das rotas - global')
    next()
})

export default router