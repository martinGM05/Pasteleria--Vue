<template>
  <div class="containerCakes">
    <div class="container">
      <h1>Pasteles</h1>
    </div>
    <div class="pasteles">
      <swiper
        :slidesPerView="4"
        :breakpoints="$store.state.breakpoints"
        :grid="{
          rows: 1,
        }"
        :spaceBetween="30"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        
        <swiper-slide v-for="(cake, index) in $store.getters.getCakes" :key="index">
          <div class="card">
            <div class="imgCakes">
              <img class="imgCakes" v-bind:src=cake.img />
            </div>
          </div>
        </swiper-slide>

      </swiper>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper";

export default {
  name: "CakesComponent",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Grid, Pagination],
    };
  },
};
</script>

<style scoped>
.slide {
  widows: 250px;
  height: 250px;
  background-color: #43a843;
}

.containerCakes {
  width: 100%;
  height: auto;
  /* background-color: rgb(224, 198, 218); */
  background-color: rgb(255, 255, 255);
  padding: 10px;
  margin-top: 110px;
}

.container {
  display: flex;
  justify-content: center;
}

.container h1 {
  background: #cf2ea4;
  background: -webkit-linear-gradient(to right, #cf2ea4 27%, #9f00cf 84%);
  background: -moz-linear-gradient(to right, #cf2ea4 27%, #9f00cf 84%);
  background: linear-gradient(to right, #cf2ea4 27%, #9f00cf 84%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 60px;
  font-family: 'Fredoka', sans-serif;
}

.pasteles {
  margin-top: 50px;
}

.swiper{
    padding-bottom: 50px;
}

.card{
    width: 330px;
    height: 250px;
    border-radius: 10px;
}

.card:hover{
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
}

.imgCakes{
    width: 100%;
    height: 100%;
    border: 1px solid #000;
    border-radius: 10px;
}

</style>