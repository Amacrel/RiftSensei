<template>
  <div class="home col-5 mx-auto py-5 mt-5">
<iframe v-if="this.form.email === 'wiggle'" width="800" height="720" src='https://www.youtube.com/embed/JzuZAdxSD1c?&autoplay=1&start=15' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; start" allowfullscreen></iframe>
  <div class="row" v-if="this.form.email === 'sebastien'">
    <img src="../assets/6ob.gif" class="col-4"  alt="">
    <img src="../assets/seb.jpeg" class="col-4 animate__bounce animate__animated animate__infinite">
    <img src="../assets/6ob.gif" class="col-4"  alt="">
    <audio controls autoplay loop class="d-none">
    <source src="../assets/nouveau-film.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
    </audio>
    </div>
    <h1 class="text-center">Login</h1>
    <div class="card">
      <div class="card-body">
        <div class="form-group">
          <label for="email">Email address:</label>
          <input
            type="email"
            v-model="form.email"
            class="form-control"
            id="email"
          />
          <span class="text-danger" v-if="errors.email">
            {{ errors.email[0] }}
          </span>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            v-model="form.password"
            class="form-control"
            id="password"
          />
          <span class="text-danger" v-if="errors.password">
            {{ errors.password[0] }}
          </span>
        </div>
        <button @click.prevent="login" class="btn btn-primary btn-block">
          Login
        </button>
        <br>
        <div>
          <router-link to="/register" class="btn btn-info btn-block">Not registered yet ?</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from '../apis/User'
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      errors: []
    }
  },
  methods: {
    login () {
      User.login(this.form)
        .then(() => {
          localStorage.setItem('auth', 'true')
          this.$router.push({ name: 'Dashboard' })
          location.reload()
        })
        .catch(error => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors
          }
        })
    }
  }
}
</script>

<style>

</style>
