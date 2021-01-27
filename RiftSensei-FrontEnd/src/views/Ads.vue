<template>
<div>
  <div class="scroll-to-me"> Hello guys</div>
  <div class="container-fluid">
      <b-alert
      :show="dismissCountDown"
      dismissible
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
      class="mt-2"
    >
      <p>You have successfully booked a coaching, you can now see it on your <router-link to="/dashboard">dashboard</router-link> !</p>
      <b-progress
        variant="success"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>

    <div class="row">
      <div class="container col-lg-3 p-4 pr-sm-0">
        <div class="container px-0">
            <div class="card p-3" style="height: 365px">
              <div class="">
                <h5 class="my-5"><i class="fas fa-search"></i> Find your perfect coaching </h5>
                <b-input variant="outline-info" class="mb-2" type="text" v-model="search" placeholder="Search for an ad"/>

                <b-dropdown id="dropdown-1" text="Sort By" variant="outline-info mt-1" block menu-class="w-100">
                  <b-dropdown-item @click="orderBy({'order' : 'hourly_rate', 'type' : 'asc'})">Ascending Hourly Price</b-dropdown-item>
                  <b-dropdown-item @click="orderBy({'order' : 'hourly_rate', 'type' : 'desc'})">Descending Hourly Price</b-dropdown-item>
                  <b-dropdown-item @click="orderBy({'order' : 'coaching_date', 'type' : 'asc'})">Nearest Coaching Date</b-dropdown-item>
                  <b-dropdown-item @click="orderBy({'order' : 'coaching_date', 'type' : 'desc'})">Furthest Coaching Date</b-dropdown-item>
                  <b-dropdown-item @click="orderBy({'order' : 'duration', 'type' : 'asc'})">Shortest coaching</b-dropdown-item>
                  <b-dropdown-item @click="orderBy({'order' : 'duration', 'type' : 'desc'})">Longest coaching</b-dropdown-item>
                </b-dropdown>
            </div>
          </div>
          <div class="container px-0 my-3 d-none d-lg-block">
            <div class="card p-3" style="height: 335px">
              <h5 class="my-5"> Create your sensei ad and earn some gems ! <img src="../assets/gem.svg" height="30px" alt=""></h5>
              <b-button class="btn btn-primary" :to="{ name: 'CreateAd' }"><i class="far fa-plus-square"></i> Create ad</b-button>
            </div>
          </div>
        </div>
    </div>

      <div class="container col-md-9 p-4">
          <div v-for="ad in filteredAds" :key="ad.id">
              <div v-if="(!(ad.pending === 1))">
                <b-card class="mb-3 p-3">
                  <b-card-text>
                    <div class="row">
                      <div class="container col-lg-4 text-center">
                        <div v-for="user in users" :key="user.id">
                          <div v-if="ad.user_id === user.id">
                            <img :src="user.avatar" class="rounded-circle mb-3" alt="">
                            <h6><b>{{user.name}}</b></h6>
                              <h5 v-if="user.verified_coach === 1">
                                      <b-badge variant="success"><b-icon-patch-check-fll/> Official sensei</b-badge>
                              </h5>
                            <div v-for="rank in ranks" :key="rank.id">
                              <div v-if="user.rank_id === rank.id">
                                <h6><b>{{rank.name}}</b>
                                  <img :src="rank.image" height="50" width="50">
                                </h6>
                                <b-button class="mb-2 mb-sm-0" variant="outline-info" :to="{ path: 'profile/' + ad.user_id }"><i class="far fa-user"></i> Coach profile</b-button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="container col-lg-5 text-left">
                        <h6><b>Description</b></h6>
                        <div>{{ad.description}}</div>
                        <br>
                        <h6><b>Coaching date</b></h6>
                        <div>{{ad.coaching_date}}</div>
                        <br>
                        <h6><b>Duration : </b> {{ad.duration}} hour(s)</h6>
                      </div>
                      <div class="container col-lg-3 text-left">
                        <h6><b>Rate</b></h6>
                        <div>{{ad.hourly_rate}} <img class="pb-1" src="../assets/gem.svg" height="20px" alt=""> /hour</div>
                        <br>

                        <div v-if="authuser">
                          <div v-if="authuser.id === ad.user_id">
                            <button class="btn btn-primary mt-5 btn-block" disabled>You posted this ad</button>
                          </div>
                          <div v-else>
                            <button class="btn btn-primary mt-5 btn-block "
                              @click="bookIt({'cost' : -(ad.hourly_rate)*(ad.duration), 'id' : ad.id}); showAlert(); scrollToElement();">
                                <b> Book it ! {{(ad.hourly_rate)*(ad.duration)}} </b>
                                <img class="pb-1" src="../assets/gem.svg" height="20px" alt="">
                              </button>
                          </div>
                        </div>
                        <div v-else>
                          <button class="btn btn-primary mt-5 btn-block "
                              @click="bookIt({'cost' : -(ad.hourly_rate)*(ad.duration), 'id' : ad.id}); showAlert(); scrollToElement();">
                                <b> Book it ! {{(ad.hourly_rate)*(ad.duration)}} </b>
                                <img class="pb-1" src="../assets/gem.svg" height="20px" alt="">
                              </button>
                        </div>

                      </div>
                    </div>
                  </b-card-text>
                </b-card>
              </div>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Ads',
  data () {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      search: ''
    }
  },
  methods: {
    async bookIt (value) {
      if (!this.$store.state.authuser) {
        window.alert('Please login to book an Ad !')
        this.$router.push('login')
      } else if (this.$store.state.authuser.wallet + value.cost <= 0) {
        alert('Please head to the Wallet shop to buy some gems before booking !')
        this.$router.push('Market')
      } else {
        await this.$store.dispatch('bookIt', [this.$store.state.authuser.id, value.id, this.$store.state.authuser.rank_id])
        await this.$store.dispatch('getAds')
        await this.$store.dispatch('addGems', [this.$store.state.authuser.id, value.cost])
      }
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    orderBy (data) {
      this.$store.dispatch('orderBy', data)
    },
    scrollToElement () {
      const el = this.$el.getElementsByClassName('scroll-to-me')[0]

      if (el) {
        el.scrollIntoView()
      }
    }
  },
  computed: {
    ...mapState(['ads', 'users', 'ranks', 'authuser']),
    filteredAds () {
      return this.ads.filter(ad => ad.description.toLowerCase().includes(this.search.toLowerCase()))
    }
  },
  mounted () {
    this.$store.dispatch('getAds')
    this.$store.dispatch('getUsers')
    this.$store.dispatch('getRanks')
  }
}
</script>

<style scoped>
.scroll-to-me{
  color: #2c3e50;
}
</style>
