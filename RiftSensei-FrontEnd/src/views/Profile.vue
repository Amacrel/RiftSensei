<template>
  <div>
          <div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img :src="users.data.avatar" class="rounded-circle" alt=""/>
                        </div>
                    </div>
                    <div class="col-md-6 my-md-auto">
                        <div class="profile-head mt-2">
                                    <h3>
                                        {{ users.data.name }}
                                    </h3>
                                    <h5 v-if="users.data.verified_coach === 1">
                                      <b-badge variant="success"><b-icon-patch-check-fll/> Official sensei</b-badge>
                                    </h5>
                                     <div v-for="rank in ranks" :key="rank.id">
                                      <div v-if="users.data.rank_id === rank.id">
                                        <h5><b>{{rank.name}}</b>
                                          <img :src="rank.image" height="70" width="70">
                                        </h5>
                                      </div>
                                    </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-coach mt-5">
                            <h6>COACHING HOURS</h6>
                            {{ users.data.hours }}
                            <h6 class = "mt-5">RATE</h6>
                            <b-form-rating v-model="value" variant="warning" class="mb-2 bg-transparent rating"></b-form-rating>
                        </div>
                        <div class="profile-coach mt-5">
                            <h6 class="mb-4">SOCIAL MEDIAS</h6>
                            <a class="text-white" :href="users.data.twitter_link">
                              <i class="fab fa-twitter fa-2x mx-3"></i>
                            </a>
                            <a class="text-white" :href="users.data.discord_link">
                              <i class="fab fa-discord fa-2x mx-3"></i>
                            </a>
                            <a class="text-white" :href="users.data.opgg_link">
                              <i class="fab fa-gg fa-2x mx-3"></i>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-8 text-left">
                      <b-card title="Description" class="bglight mt-5">
                        <b-card-text>
                          {{ users.data.description }}
                        </b-card-text>
                      </b-card>
                      <b-card title="Pedagogy" class="bglight mt-5">
                        <b-card-text>
                          {{ users.data.pedagogy }}
                        </b-card-text>
                      </b-card>
                      <b-card title="Rates and comments" class="bglight mt-5">
                        <b-card-text>
                          <div v-for="ad in ads" :key="'n' + ad.id">
                            <div class="card my-1 p-2 " v-if="users.data.id === ad.user_id">
                              <div class="row">
                                <div class="col-4">Rate : <b>{{ ad.ad_rating }}/5 <i class="fas fa-star text-warning"></i></b></div>
                                <div class="col-8">"{{ ad.comments }}"</div>
                              </div>
                            </div>
                          </div>
                        </b-card-text>
                      </b-card>
                    </div>
                </div>
            </form>
        </div>
        <div class="container emp-profile">
          <h4>Ads posted by {{users.data.name}}</h4>
          <div v-for="ad in ads" :key="ad.id">
            <div v-if="(!(ad.pending === 1) && (ad.user_id === users.data.id))">
              <div class="d-none">{{hasAds = true}}</div>
                  <b-card class="my-3 p-3 bglight">
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
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="container col-lg-5 text-left">
                          <h6><b>Description</b></h6>
                          <div>{{ad.description}}</div>
                          <br>
                          <h6><b>Date of coaching</b></h6>
                          <div>{{ad.coaching_date}}</div>
                          <br>
                          <h6><b>Duration : </b> {{ad.duration}} hour(s)</h6>
                        </div>
                        <div class="container col-lg-3 text-left">
                          <h6><b>Price</b></h6>
                          <div>{{ad.hourly_rate}} <img class="pb-1" src="../assets/gem.svg" height="20px" alt=""> /hour</div>
                          <br>
                          <div v-if="!(authuser.id === ad.user_id)">
                          <button class="btn btn-primary mt-5 btn-block " @click="bookIt({'cost' : -(ad.hourly_rate)*(ad.duration), 'id' : ad.id}); showAlert();"><b> Book it ! {{(ad.hourly_rate)*(ad.duration)}} </b><img class="pb-1" src="../assets/gem.svg" height="20px" alt=""></button>
                          </div>
                          <div v-else>
                            <button class="btn btn-primary mt-5 btn-block" disabled>You posted this ad</button>
                          </div>
                        </div>
                      </div>
                    </b-card-text>
                  </b-card>
                </div>
              </div>
              <div v-if="hasAds === false"> This user has no available ads</div>
          </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      value: 3,
      hasAds: false
    }
  },
  computed: {
    ...mapState(['ads', 'users', 'ranks', 'authuser'])
  },
  mounted () {
    this.$store.dispatch('getAds')
    this.$store.dispatch('getUser', this.$route.params.id)
    this.$store.dispatch('getRanks')
  },
  methods: {
    async bookIt (value) {
      if (this.$store.state.authuser.wallet + value.cost <= 0) {
        alert('Please head to the Wallet shop to buy some gems before booking !')
        this.$router.push('Market')
      } else {
        await this.$store.dispatch('bookIt', [this.$store.state.authuser.id, value.id, this.$store.state.authuser.rank_id])
        await this.$store.dispatch('getAds')
        await this.$store.dispatch('addGems', [this.$store.state.authuser.id, value.cost])
      }
    }
  }
}
</script>

<style scoped>

.emp-profile{
    padding: 3%;
    margin-top: 3%;
    margin-bottom: 3%;
    border-radius: 0.5rem;
    background: #263646;
}
.profile-img{
    text-align: center;
}
.profile-img img{
    width: 70%;
    height: 100%;
}
.profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: 10%;
    width: 70%;
    border: none;
    border-radius: 0;
    font-size: 15px;
    background: #212529b8;
}
.profile-img .file input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
}
.profile-head h6{
    color: #ccc500;
}

.profile-coach{
    padding: 14%;
    background-color: #293a4b;
}

.profile-tab label{
    font-weight: 600;
}
.profile-tab p{
    font-weight: 600;
    color: #0062cc;
}
.rating {
  border: none;
}
.bglight {
  background-color: #293a4b !important;
  border: none;
}

</style>
