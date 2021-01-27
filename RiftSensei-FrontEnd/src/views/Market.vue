<template>
  <div class="container">
    <h2>Buy Gems <img class="pb-1" src="../assets/gem.svg" height="30px" alt=""></h2>
    <div>
    <b-card-group deck class="mt-5">
      <b-card class ="gems" img-src="https://i.postimg.cc/tgYfBGwM/100gems.png" img-alt="Card image" img-top>
        <b-card-text>
          <h5>Newbie Pack</h5>
          <h5>4,99€</h5>
          <button class="btn btn-primary" @click="addGems(100); showAlert();" >Purchase</button>
        </b-card-text>
      </b-card>
      <b-card class ="gems" img-src="https://i.postimg.cc/cJ2zj5N4/300gems.png" img-alt="Card image" img-top>
        <b-card-text>
          <h5>Starter Pack</h5>
          <h5>11,99€</h5>
          <button class="btn btn-primary" @click="addGems(300); showAlert();">Purchase</button>
        </b-card-text>
      </b-card>

    </b-card-group>
  </div>
  <div class="mt-4">
    <b-card-group deck>
      <b-card class ="gems" img-src="https://i.postimg.cc/153KGcLW/500gems.png" img-alt="Card image" img-top>
        <b-card-text>
          <h5>Intermediate Pack</h5>
          <h5>17,99€</h5>
          <button class="btn btn-primary" @click="addGems(500); showAlert();">Purchase</button>
        </b-card-text>
      </b-card>
      <b-card class ="gems" img-src="https://i.postimg.cc/MHWmryXp/1000gems.png" img-alt="Card image" img-top>
        <b-card-text>
          <h5>Pro Pack</h5>
          <h5>30,99€</h5>
          <button class="btn btn-primary" @click="addGems(1000); showAlert();">Purchase</button>
        </b-card-text>
      </b-card>

    </b-card-group>
  </div>
  <b-alert
      :show="dismissCountDown"
      dismissible
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
      class="mt-2"
    >
      <p>Thanks for your purchase! Your gems has been added to your wallet <img class="pb-1" src="../assets/gem.svg" height="20px" alt=""></p>
      <b-progress
        variant="success"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>

    <div class="row justify-content-center">
      <div class="col-md-8 mt-5">
        <div class="card">
          <div class="card-header">Bonus Code</div>
          <div class="card-body">
            <form>
            <div class="form-group" id="easter">
              <label for="code">Code:</label>
              <input
                type="text"
                v-model="form.code"
                class="form-control"
                id="code"
              />
            </div>
              <div v-if="(this.form.code === 'WeLoveEpitech')">
                <button class="btn btn-info" @click="failedInput">Submit</button>
              </div>
              <div v-else-if="(this.form.code === 'Seb4Ever' || this.form.code === 'TeamJess')">
                <button class="btn btn-info" @click="failedInput2">Submit</button>
              </div>
              <div v-else>
                <button class="btn btn-info" @click="addGems(999)">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      money: {
        gems: [100, 500, 999]
      },
      form: {
        code: ''
      },
      newWallet: '',
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  methods: {
    addGems (value) {
      this.$store.dispatch('addGems', [this.$store.state.authuser.id, value])
    },
    failedInput () {
      var img = document.createElement('IMG')
      img.setAttribute('src', 'https://media1.tenor.com/images/d774a5a63588bbb75193a07b635f1389/tenor.gif?itemid=16279809')
      img.setAttribute('width', '304')
      img.setAttribute('height', '228')
      img.setAttribute('alt', '')
      var div = document.createElement('DIV')
      div.innerHTML = 'Are you mocking me?'
      document.getElementById('easter').appendChild(img)
      document.getElementById('easter').appendChild(div)
    },
    failedInput2 () {
      let img = document.createElement('IMG')
      img.setAttribute('src', 'https://townsquare.media/site/295/files/2015/01/Loser.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89')
      img.setAttribute('width', '304')
      img.setAttribute('height', '228')
      img.setAttribute('alt', '')
      document.getElementById('easter').appendChild(img)
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>

<style scoped>
.gems:hover {
  transform: scale(1.03);
  box-shadow:0px 11px 44px -11px rgba(0,0,0,0.1) ;
}

</style>
