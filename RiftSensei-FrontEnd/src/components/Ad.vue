<template>
  <div>
      <b-card img-src="https://placekitten.com/200/200" img-alt="Card image" img-left class="mb-3 p-3">
                  <b-card-text>
                    <div class="row">
                      <div class="container col-md-4 text-left">
                        <div v-for="user in users" :key="user.id">
                          <div v-if="ad.user_id === user.id">
                            <h6><b>{{user.name}}</b></h6>
                              <h5 v-if="user.verified_coach === 1">
                                      <b-badge variant="success"><b-icon-patch-check-fll/> Official sensei</b-badge>
                              </h5>
                            <div v-for="rank in ranks" :key="rank.id">
                              <div v-if="user.rank_id === rank.id">
                                <h6><b>{{rank.name}}</b>
                                  <img :src="rank.image" height="50" width="50">
                                </h6>
                                <b-button variant="outline-info" :to="{ path: 'profile/' + ad.user_id }">Coach profile</b-button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="container col-md-4 text-left">
                        <h6><b>Description</b></h6>
                        <div>{{ad.description}}</div>
                        <br>
                        <h6><b>Coaching date</b></h6>
                        <div>{{ad.coaching_date}}</div>
                        <br>
                        <h6><b>Duration : </b> {{ad.duration}} hour(s)</h6>
                      </div>
                      <div class="container col-md-4 text-left">
                        <h6><b>Rate</b></h6>
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
</template>

<script>
export default {
  name: 'Ad'
}
</script>

<style>

</style>
