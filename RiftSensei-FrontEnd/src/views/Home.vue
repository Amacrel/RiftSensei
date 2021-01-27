<template>
<div>
    <div class="container row mx-auto mb-3 pl-5" id="introwithimage">

        <div class="container col-12 col-md-6 py-5 bg-transparent mx-0 text-left wow animate__animated animate__fadeInLeft">
            <h1 class="display-4">Welcome to </h1>
            <h1 class="display-4 mb-3"><b>RiftSensei !</b></h1>
            <h5 class="mb-4">Start your training and become a legend !</h5>
            <p class="lead">
              <router-link to="/ads" class="btn btn-primary btn-lg mr-2 mb-2 mb-xl-0" role="button">Find your sensei</router-link>
              <router-link to="/ads/create" class="btn btn-outline-secondary text-white btn-lg mr-2" role="button">Become a sensei</router-link>
        </p>

        </div>
              <div class="col-4 col-md-5 mr-3">
                <img class= "wow animate__animated animate__backInRight" src="../assets/proto persolol.png" height="400px">
              </div>
    </div>
            <!--- Features --->
    <div class="container-fluid bg-light py-5" id="Features">
            <div class="container my-md-5 px-5">
                <div class="row">
                    <div class="container col-lg-6 text-left wow animate__animated animate__fadeInLeft row">
                        <h2 class="mb-5"> <img src="../assets/japansensei.png" alt=""> What is RiftSensei ?</h2>
                        <h5>RiftSensei is a coaching plateform for League of Legends players. <br><br> Everyone can be a sensei (a coach), a student or both ! <br> Create your profile with your in-game stats that can be checked by other users. <br><br> Senseis post coaching ads with some informations and students can book it. </h5>
                    </div>
                    <div class="container col-md-6 wow animate__animated animate__fadeInRight text-right my-auto">
                        <img src="../assets/lol.png" class="rounded-pill" width="400px" alt="">
                    </div>
                </div>
            </div>
    </div>
        <!--- Features --->
    <div class="container-fluid bg-none py-5" id="Features">
            <div class="container my-md-5 px-5">
                <div class="row">
                    <div class="container col-lg-6 wow animate__animated animate__fadeInLeft text-left">
                        <img src="../assets/circle.png" height="100%" alt="">
                    </div>
                    <div class="container col-md-6 text-left wow animate__animated animate__fadeInRight row">
                        <h2 class="mb-4"> ⚡️ RiftSensei is a virtuous circle ecosystem.</h2>
                        <h5>Everyone can be a sensei or a student. You earn gems when you coach that you can spend to receive coaching from a more experienced player than you. <br><br>That's why using RiftSensei is totally free !</h5>
                    </div>
                </div>
            </div>
    </div>
    <!--- Features --->
    <div class="container-fluid bg-light py-5" id="Features">
            <div class="container my-sm-5">
                <div class="row">
                    <div class="container col-md-6 text-left wow animate__animated animate__fadeInLeft row my-auto">
                        <h2 class="mb-4"> 💻 📱 RiftSensei is a responsive website.</h2>
                        <h5>You can use RiftSensei on all your devices !</h5>
                    </div>
                    <div class="container col-lg-6 wow animate__animated animate__fadeInRight text-right">
                        <img src="../assets/responsive.png" height="100%" alt="">
                    </div>
                </div>
            </div>
    </div>
    <!--- Features --->
    <div class="container-fluid bg-none py-5" id="Features">
            <div class="container my-md-5 px-5">
                <div class="row">
                    <div class="container col-lg-6 wow animate__animated animate__fadeInLeft text-left">
                        <img src="../assets/market.png" class="rounded" height="100%" alt="">
                    </div>
                    <div class="container col-md-6 text-left wow animate__animated animate__fadeInRight row my-auto">
                        <h2 class="mb-5"> <img src="../assets/gem.svg" height="25px" alt=""> Buy some gems in the Market.</h2>
                        <h5>If you don't want to be a sensei to earn gems, don't fret you can still buy some gems on the market for few euros.</h5>
                    </div>
                </div>
            </div>
    </div>
            <!-- Team -->
    <div class="container-fluid containergrey bg-light py-5 wow animate__animated animate__backInRight" id="Team">
        <h3 class="text-center">Our team</h3>
            <div class="container py-4">

                <div class="row">

                    <!-- Team member -->
                    <div class="col-xs-12 col-sm-6 col-md-4">

                                    <div class="card mb-3 card-team">
                                        <div class="card-body text-center">
                                            <p><b-avatar :src="require('../assets/xavier.png')" size="10rem"></b-avatar></p>
                                            <h4 class="card-title">Alexandre</h4>
                                            <p class="card-text">2020 Epitech Coding Academy student.</p>
                                            <a href="mailto:someone@example.com" class="btn btn-primary btn-sm"><i class="fas fa-envelope"></i></a>
                                        </div>
                                    </div>

                    </div>
                    <!-- ./Team member -->
                  <!-- Team member -->
                    <div class="col-xs-12 col-sm-6 col-md-4">

                                    <div class="card card-team mb-3">
                                        <div class="card-body text-center">
                                            <p><b-avatar :src="require('../assets/xavier.png')" size="10rem"></b-avatar></p>
                                            <h4 class="card-title">François</h4>
                                            <p class="card-text">2020 Epitech Coding Academy student.</p>
                                            <a href="mailto:someone@example.com" class="btn btn-primary btn-sm"><i class="fas fa-envelope"></i></a>
                                        </div>
                                    </div>

                    </div>
                    <!-- ./Team member -->
                    <div class="col-xs-12 col-sm-6 col-md-4">

                        <div class="card  card-team mb-3">
                            <div class="card-body text-center">
                                <p><b-avatar :src="require('../assets/xavier.png')" size="10rem"></b-avatar></p>
                                <h4 class="card-title">Xavier</h4>
                                <p class="card-text">2020 Epitech Coding Academy student.</p>
                                <a href="mailto:someone@example.com" class="btn btn-primary btn-sm"><i class="fas fa-envelope"></i></a>
                            </div>
                        </div>

                    </div>
                    <!-- ./Team member -->

                </div>
                <div class="row">

                    <!-- Team member -->
                    <div class="col-xs-12 col-sm-6 col-md-6">

                                    <div class="card mb-3 card-team">
                                        <div class="card-body text-center">
                                            <p><b-avatar :src="require('../assets/xavier.png')" size="10rem"></b-avatar></p>
                                            <h4 class="card-title">Augustin</h4>
                                            <p class="card-text">2020 Epitech Coding Academy student.</p>
                                            <a href="mailto:someone@example.com" class="btn btn-primary btn-sm"><i class="fas fa-envelope"></i></a>
                                        </div>
                                    </div>

                    </div>
                    <!-- ./Team member -->
                  <!-- Team member -->
                    <div class="col-xs-12 col-sm-6 col-md-6">

                                    <div class="card card-team mb-3">
                                        <div class="card-body text-center">
                                            <p><b-avatar :src="require('../assets/xavier.png')" size="10rem"></b-avatar></p>
                                            <h4 class="card-title">Julien</h4>
                                            <p class="card-text">2020 Epitech Coding Academy student.</p>
                                            <a href="mailto:someone@example.com" class="btn btn-primary btn-sm"><i class="fas fa-envelope"></i></a>
                                        </div>
                                    </div>

                    </div>

                </div>
            </div>
    </div>

    <div class="container mt-0">
        <footer class="pt-4 my-md-5 pt-md-5">
            <div class="row">
            <div class="col-12 col-md">
                <img class="mb-2" src="../assets/proto logo RIFT sensei.png" alt="" height="40">
                <small class="d-block mb-3 text-muted">&copy; 2020</small>
            </div>
            <div class="col-6 col-md">
                <h5>Features</h5>
                <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="">Recent ads</a></li>
                <li><a class="text-muted" href="">All ads</a></li>
                <li><a class="text-muted" href="">Create ad</a></li>
                <li><a class="text-muted" href="">My profile</a></li>
                <li><a class="text-muted" href="">Register</a></li>
                <li><a class="text-muted" href="">Login</a></li>
                </ul>
            </div>
            <div class="col-6 col-md">
                <h5>About</h5>
                <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="">Service Features</a></li>
                <li><a class="text-muted" href="">Team</a></li>
                <li><a class="text-muted" href="#">Privacy</a></li>
                <li><a class="text-muted" href="#">Terms</a></li>
                </ul>
            </div>
            </div>
        </footer>
    </div>
</div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
