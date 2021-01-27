// import dependency to handle HTTP request to our back end
import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'
import User from '../apis/User'

Vue.use(Vuex)

axios.defaults.baseURL = 'http://localhost:8000/api'
axios.defaults.withCredentials = true

// to handle state
const state = {
  ads: [],
  users: [],
  ranks: [],
  authuser: null,
  errors: []
}

// to handle state
const getters = {
}

// to handle actions
const actions = {
  getAds ({commit}) {
    axios.get('/ad')
      .then(response => {
        commit('SET_ADS', response.data)
      })
  },
  orderBy ({commit}, data) {
    axios.get('/ads/' + data.order + '/' + data.type)
      .then(response => {
        commit('SET_ADS', response.data)
      })
  },
  deleteAd ({commit}, data) {
    axios.delete('/ad/' + data)
  },
  editAd ({commit}, data) {
    axios.put('/ad/' + data[0], {
      coaching_date: data[1].coaching_date,
      description: data[1].description,
      duration: data[1].duration,
      hourly_rate: data[1].hourly_rate
    })
  },
  editProfile ({commit}, data) {
    axios.put('/users/' + data[0], {
      description: data[1].description,
      pedagogy: data[1].pedagogy,
      twitter_link: data[1].twitter_link,
      discord_link: data[1].discord_link,
      opgg_link: data[1].opgg_link,
      rank_id: data[1].rank_id
    })
  },
  setAvatar ({commit}, data) {
    axios.put('/users/' + data[0], {
      avatar: 'http://ddragon.leagueoflegends.com/cdn/10.25.1/img/champion/' + data[1] + '.png'
    })
  },
  coachingDone ({commit}, data) {
    axios.put('/ad/' + data, {
      finished: 1
    })
  },
  commentAd ({commit}, data) {
    axios.put('/ad/' + data[0], {
      comments: data[1]
    })
  },
  rateAd ({commit}, data) {
    console.log(data)
    axios.put('/ad/' + data[0], {
      ad_rating: data[1],
      rated: 1
    })
  },
  createAd ({commit}, data) {
    axios.post('/ad', {
      user_id: data[0],
      description: data[1].description,
      coaching_date: data[1].coaching_date,
      duration: data[1].duration,
      hourly_rate: data[1].hourly_rate
    })
      .then(state.errors = 'no errors')
      .catch(error => {
        if (error.response.status === 422) {
          state.errors = error.response.data.errors
        }
      })
  },
  addGems ({commit}, data) {
    axios.put('/users/' + data[0], {
      wallet: state.authuser.wallet + data[1]
    })
      .then(User.auth().then(response => {
        commit('SET_USER_DATA', response.data)
      }))
  },
  getUsers ({commit}) {
    axios.get('/users')
      .then(response => {
        commit('SET_USERS', response.data)
      })
  },
  getUser ({commit}, id) {
    axios.get('/users/' + id)
      .then(response => {
        commit('SET_USERS', response.data)
      })
  },
  addHours ({commit}, data) {
    axios.put('/users/' + data[0], {
      hours: state.authuser.hours + data[1]
    })
      .then(User.auth().then(response => {
        commit('SET_USER_DATA', response.data)
      }))
  },

  getRanks ({commit}) {
    axios.get('/rank')
      .then(response => {
        commit('SET_RANKS', response.data)
      })
  },
  bookIt ({commit}, data) {
    axios.put('/ad/' + data[1], {
      student_id: data[0],
      student_rank: data[2],
      pending: 1
    })
  }
}

// to handle mutations
const mutations = {
  SET_ADS (state, ads) {
    state.ads = ads
  },
  SET_USER_DATA (state, userData) {
    state.authuser = userData
  },

  CLEAR_USER_DATA (state) {
    state.authuser = null
    location.reload()
  },
  SET_USERS (state, users) {
    state.users = users
  },
  SET_RANKS (state, ranks) {
    state.ranks = ranks
  },
  BOOK_AD (state, ad) {
    state.ads = ad
  }
}

// export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
/** we have just created a boiler plate for our vuex store module**/
