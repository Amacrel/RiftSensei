<template>
  <div>
    <b-row class="mt-2">
      <b-col sm="2"></b-col>
      <b-col sm="8" class="card">
        <h1 class="mb-3">Edit your profile</h1>
        <label for="textarea-Description">Description</label>
        <b-form-textarea
          v-model="form.description"
          id="textarea-Description"
          placeholder="Quelques lignes pour te decrire"
        ></b-form-textarea>
        <label for="textarea-Pedagogy">Pedagogy</label>
        <b-form-textarea
          v-model="form.pedagogy"
          id="textarea-Pedagogy"
          placeholder="Your Pedagogy"
        ></b-form-textarea>
        <label for="Twitter Link">Twitter Handle</label>
        <b-form-input v-model="form.twitter_link" placeholder="Twitter Link"></b-form-input>
        <label for="Discord Link">Discord</label>
        <b-form-input v-model="form.discord_link" placeholder="Discord Link"></b-form-input>
        <label for="OP.GG Link">OP.GG</label>
        <b-form-input v-model="form.opgg_link" placeholder="OP.GG Link"></b-form-input>
        <label>Rank</label>
        <b-form-select v-model="form.rank_id" :options="options"></b-form-select>
        <div  v-if="this.form.rank_id === 1">
          <img src="https://smurfsaccounts.com/wp-content/uploads/2017/02/unranked.png" alt="" width="150" height="150">
        </div>
        <div  v-if="this.form.rank_id === 2">
          <img src="https://opgg-static.akamaized.net/images/medals/iron_1.png" alt="" width="150" height="150">
        </div>
        <div  v-if="this.form.rank_id === 3">
          <img src="https://lolg-cdn.porofessor.gg/img/league-icons-v2/160/2-1.png" alt="" width="150" height="150">
        </div>
        <div  v-if="this.form.rank_id === 4">
          <img src="https://lolg-cdn.porofessor.gg/img/league-icons-v2/160/3-1.png" alt="" width="150" height="150">
        </div>
        <div  v-if="this.form.rank_id === 5">
          <img src="https://lolg-cdn.porofessor.gg/img/league-icons-v2/160/4-1.png" alt="" width="150" height="150">
        </div>
        <div  v-if="this.form.rank_id === 6">
          <img src="https://lolg-cdn.porofessor.gg/img/league-icons-v2/160/5-1.png" alt="" width="150" height="150">
        </div>
        <div  v-if="this.form.rank_id === 7">
          <img src="https://emoji.gg/assets/emoji/6018_Diamond.png" alt="" width="150" height="150">
        </div>
        <div  v-if="this.form.rank_id === 8">
          <img src="https://lolg-cdn.porofessor.gg/img/league-icons-v2/160/7-1.png" alt="" width="150" height="150">
        </div>
        <div  v-if="this.form.rank_id === 9">
          <img src="https://emoji.gg/assets/emoji/2647_Grandmaster.png" alt="" width="150" height="150">
        </div>
        <div  v-if="this.form.rank_id === 10">
          <img src="https://emoji.gg/assets/emoji/2506_Challenger.png" alt="" width="150" height="150">
        </div>
        <button class="btn btn-info mx-auto my-2" @click="editProfile()">Submit</button>
      </b-col>
    </b-row>
  </div>
</template>

<script>

export default {
  data () {
    return {
      rank_id: 1,
      options: [
        {value: 1, text: 'Unranked'},
        {value: 2, text: 'Iron'},
        {value: 3, text: 'Bronze'},
        {value: 4, text: 'Silver'},
        {value: 5, text: 'Gold'},
        {value: 6, text: 'Platinum'},
        {value: 7, text: 'Diamond'},
        {value: 8, text: 'Master'},
        {value: 9, text: 'Grand Master'},
        {value: 10, text: 'Challenger'}
      ],
      champion: null,
      form: {
        description: this.$store.state.authuser.description,
        pedagogy: this.$store.state.authuser.pedagogy,
        twitter_link: this.$store.state.authuser.twitter_link,
        discord_link: this.$store.state.authuser.discord_link,
        opgg_link: this.$store.state.authuser.opgg_link,
        rank_id: this.$store.state.authuser.rank_id
      },
      errors: []
    }
  },
  methods: {
    editProfile () {
      this.$store.dispatch('editProfile', [this.$store.state.authuser.id, this.form])
        .then(() => {
          this.$router.push({ name: 'Dashboard' })
        })
    }
  }
}
</script>

<style>

</style>
