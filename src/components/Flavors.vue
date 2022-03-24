<template>
  <div class="containerFlavors">
    <div class="title">
      <h1>Sabores</h1>
    </div>
    <div class="carrousel-flavors">
      <swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="20"
        navigation
        :pagination="{ clickable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >

        <swiper-slide v-for="(flavor, index) in $store.getters.getFlavors" :key="index">
          <div class="card">
            <div class="card-content">
              <div class="image">
                <img
                  v-bind:src=flavor.img
                  alt="Logo Pasteleria Carmen"
                />
              </div>
              <div class="name-profession">
                <span class="name"> {{ flavor.name }} </span>
              </div>
              
            </div>
          </div>
        </swiper-slide>

      </swiper>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  name: "FlavorsComponent",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, A11y],
    };
  },
};
</script>

<style scoped>
.containerFlavors {
  width: 100%;
  height: auto;
  background-color: rgb(224, 198, 218);
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.title {
  width: 50%;
  height: 100px;
  border-radius: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title h1 {
  background: #cf2ea4;
  background: -webkit-linear-gradient(to right, #cf2ea4 27%, #9f00cf 84%);
  background: -moz-linear-gradient(to right, #cf2ea4 27%, #9f00cf 84%);
  background: linear-gradient(to right, #cf2ea4 27%, #9f00cf 84%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 60px;
  font-family: "Fredoka", sans-serif;
}

.carrousel-flavors {
  width: 90%;
  height: 80%;
  margin-top: 20px;
  border-radius: 20px;
}

.swiper {
  padding-left: 60px;
  padding-bottom: 20px;
}

.swiper-pagination {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20px;
  z-index: 10;
}

.image {
  height: 180px;
  width: 250px;
  border-radius: 50%;
  padding: 3px;
  background-color: #7d2ae8;
}

.image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #fff;
}

.card {
  position: relative;
  background-color: #fff;
  border-radius: 20px;
  margin: 20px 0;
  width: 280px;
}

.card::before {
  content: "";
  position: absolute;
  height: 40%;
  width: 100%;
  background-color: #7d2ae8;
  border-radius: 20px 20px 0 0;
}

.card .card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  position: relative;
  z-index: 100;
}

.card .media-icons {
  position: absolute;
  top: 10px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card .media-icons #iconMedia {
  color: #fff;
  opacity: 0.6;
  margin-top: 10px;
  transition: add 0.3s ease;
  cursor: pointer;
}

.card .media-icons #iconMedia:hover {
  opacity: 1;
}

.card .name-profession {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  color: #333;
}

.name-profession .name {
  font-size: 20px;
  font-weight: 600;
  font-family: "Fredoka", sans-serif;
}

.name:hover{
  color: #7d2ae8;
  font-size: 25px;
  cursor: pointer;
  border-bottom: 2px solid #7d2ae8;
  transition: font-size 0.2s ease;
}

.name-profession .profession {
  font-size: 15px;
  font-weight: 500;
}

.card .rating {
  display: flex;
  align-items: center;
  margin-top: 18px;
}

.card .rating #iconMedia {
  font-size: 18px;
  margin: 0 2px;
  color: #7d2ae8;
}

.card .button {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.card .button button {
  background-color: #7d2ae8;
  outline: none;
  border: none;
  color: #fff;
  padding: 8px 22px;
  border-radius: 20px;
  font-size: 14px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.button button:hover {
  background-color: #6616d0;
}
</style>