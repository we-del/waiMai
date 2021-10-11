import VueRouter from 'vue-router'
import Vue from 'vue'
import Route from './router'

Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes:Route
})