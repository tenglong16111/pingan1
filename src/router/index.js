import Vue from 'vue'
import Router from 'vue-router'
import home1 from '@/components/home1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home1',
      component: home1
    }
  ]
})
