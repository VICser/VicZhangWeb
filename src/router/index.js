import Vue from 'vue'
import Router from 'vue-router'
import Game from '@/components/Game'
import Home from '@/components/Home'
import Photo from '@/components/Photo'
import DataTag from '@/components/DataTag'
import Coding from '@/components/Coding'
import TransLate from '@/components/TransLate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },
    {
      path: '/photo',
      name: 'photo',
      component: Photo
    },
    {
      path: '/datatag',
      name: 'datatag',
      component: DataTag
    },
    {
      path: '/coding',
      name: 'coding',
      component: Coding
    },
    {
      path: '/translate',
      name: 'translate',
      component: TransLate
    },
    {path:"*",redirect:"/"}
    ],
    mode:"history"
})
