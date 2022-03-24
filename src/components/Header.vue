<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-pink">
    <div class="container-fluid">
      <div class="banderaLogo">
        <img
          v-bind:src="require('../assets/img/Logo.png')"
          id="imgLogo"
          alt="Logo Pasteleria Carmen"
        />
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="spaceNavbar"></div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link fw-bold">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/pedir-pastel" class="nav-link fw-bold"
              >Pedir Pastel</router-link
            >
          </li>
          <li class="nav-item">
              <router-link to="/pastelero" class="nav-link fw-bold"
              >Administración</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
.bg-pink {
  /* background-color: #ff9db7; */
  background-color: rgb(252, 207, 252);
}

.navbar {
  padding: 10px;
}

@media (min-width: 768px) {
  .navbar {
    padding: 10px;
    height: 80px;
    border-bottom: 2px solid #000;
    font-family: 'Fredoka', sans-serif;
  }
}

#imgLogo {
  width: 100px;
  height: 100px;
}

@media (min-width: 768px) {
  #imgLogo {
    width: 150px;
    height: 150px;
  }
}

.spaceNavbar {
  display: none;
}

@media (min-width: 768px) {
  .spaceNavbar {
    width: 950px;
    display: block;
  }
}

.banderaLogo {
  visibility: none;
}

@media (min-width: 768px) {
  .banderaLogo {
    width: auto;
    height: auto;
    background: rgb(252, 207, 252);
    margin-left: 105px;
    position: absolute;
    margin-top: 80px;
    z-index: 50;
    visibility: visible;
    border-radius: 50%;
    border-bottom-color: #000;
    border-bottom-style: solid;
    border-bottom-width: 3px;
  }
}
</style>