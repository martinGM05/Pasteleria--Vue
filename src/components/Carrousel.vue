<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide sizeCarrousel"
    data-bs-ride="carousel"
  >
   <div class="containerTextFront">
       <div class="textFront">
           <p class="textDescription">
                Nosotros hacemos tus sueños pasteles !!!
           </p>
       </div>
   </div>
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img v-bind:src="require('../assets/img/img1.jpg')" class="d-block w-100 sizeImg" alt="..." />
      </div>
      <div class="carousel-item">
        <img v-bind:src="require('../assets/img/img2.jpg')" class="d-block w-100 sizeImg" alt="..." />
      </div>
      <div class="carousel-item">
        <img v-bind:src="require('../assets/img/img3.jpg')" class="d-block w-100 sizeImg" alt="..." />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "CarrouselComponent",
};
</script>

<style scoped>
.sizeCarrousel{
    height: 500px;
}

@media (min-width: 768px) {
    .sizeCarrousel{
        height: 620px;
    }   
}

.sizeImg{
    height: 500px;
}

@media (min-width: 768px) {
    .sizeImg{
        height: 620px;
    }   
}

.containerTextFront{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    background-color: rgba(32, 32, 32, 0.404);
    transform: translate(-50%, -50%);
}

.textFront{
    width: 50%;
    height: auto;
    position: absolute;
    z-index: 1;
    top: 55%;
    left: 50%;
    /* background-color: rgba(32, 32, 32, 0.514); */
    transform: translate(-50%, -50%);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.textDescription{
    color: rgb(255, 255, 255);
    font-size: 30px;
    font-family: 'Fredoka', sans-serif;
    font-weight: bold;
    text-align: center;
}

@media (min-width: 768px) {
  .textDescription{
    color: rgb(255, 255, 255);
    font-size: 50px;
    font-weight: bold;
    text-align: center;
  }
}

.imgPastel{
    width: 20%;
    height: 50%;
}

</style>