<template>
  <nav class="navbar navbar-expand navbar-dark">
    <div class="container">
      <div class="navbar-header">
          <b-navbar variant="faded" type="light">
            <b-navbar-brand :to="{ name: 'Home' }">
              <img src="../assets/proto logo RIFT sensei.png" height="60px" alt="LogoRiftSensei">
            </b-navbar-brand>
          </b-navbar>
      </div>
      <ul class="nav navbar-nav">
        <router-link
          class="nav-item nav-link"
          :to="{ name: 'Ads' }"
        >
          Ads
        </router-link>
        <router-link
          v-if="!isLoggedIn"
          class="nav-item nav-link"
          :to="{ name: 'Login' }"
        >
          Login
        </router-link>
        <router-link
          v-if="!isLoggedIn"
          class="nav-item nav-link"
          :to="{ name: 'Register' }"
        >
          Register
        </router-link>
        <router-link
          v-if="isLoggedIn && authuser"
          class="nav-item nav-link"
          :to="{ name: 'CreateAd' }"
        >
          Create ad
        </router-link>
         <router-link
          v-if="isLoggedIn && authuser"
          class="nav-item nav-link"
          :to="{ name: 'Market' }"
        >
          Wallet : <b class="text-success">{{authuser.wallet}}</b> <img class="pb-1" src="../assets/gem.svg" height="20px" alt="">
        </router-link>
        <router-link
          v-if="isLoggedIn"
          class="nav-item nav-link"
          :to="{ name: 'Dashboard' }"
        >
          Dashboard
        </router-link>
        <a
          class="nav-item nav-link"
          v-if="isLoggedIn"
          @click.prevent="logout"
          href="#"
          >Logout</a
        >
      </ul>
    </div>
  </nav>
</template>

<script>
import User from '../apis/User'
export default {
  data () {
    return {
      isLoggedIn: false
    }
  },
  computed: {
    authuser () {
      return this.$store.state.authuser
    }
  },
  created () {
    this.isLoggedIn = !!localStorage.getItem('auth')
  },
  methods: {
    logout () {
      User.logout().then(() => {
        localStorage.removeItem('auth')
        this.isLoggedIn = false
        this.$router.push({ name: 'Home' })
      })
        .then(() => {
          this.$store.commit('CLEAR_USER_DATA')
        })
    }
  }
}
</script>

<style>
.router-link-exact-active.nav-item {
  color: #27cda6 !important;
  border-bottom: solid #27cda6 2px;
  font-weight: 600;
}
.navbar {
  background-color: #2c3e50;
}
</style>
