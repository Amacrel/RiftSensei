import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Test from '@/components/Test'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Dashboard from '@/views/Dashboard'
import Market from '@/views/Market'
import Profile from '@/views/Profile'
import EditProfile from '@/views/EditProfile'
import CreateAd from '@/views/CreateAd'
import Ads from '@/views/Ads'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ads',
      name: 'Ads',
      component: Ads
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { guestOnly: true }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: { guestOnly: true }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {authOnly: true}
    },
    {
      path: '/market',
      name: 'Market',
      component: Market,
      meta: {authOnly: true}
    },
    {
      path: '/profile/:id',
      name: 'Profile',
      component: Profile,
      meta: {authOnly: true}
    },
    {
      path: '/dashboard/edit',
      name: 'EditProfile',
      component: EditProfile,
      meta: {authOnly: true}
    },
    {
      path: '/ads/create',
      name: 'CreateAd',
      component: CreateAd,
      meta: {authOnly: true}
    }
  ]
})

function isLoggedIn () {
  return localStorage.getItem('auth')
}

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!isLoggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.guestOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (isLoggedIn()) {
      next({
        path: '/dashboard',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
