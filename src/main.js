import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name:'home',
      component: Home
    },
    {
      path: '/page-1',
      name:'page-1',
      component: Page1
    },
    {
      path: '/page-2',
      name:'page-2',
      component: Page2
    }
  ]
})

new Vue({
 el: '#app',
 render: h => h(App),
 router
})