<template>
  <div class="container">
    <div class="titleContainer">
      <h1>Pide tu pastel</h1>
    </div>

    <div class="formularioContainer">
      <form @submit="onSubmit" class="formulario">
        <div class="dataCliente">
          <div class="form-group">
            <label for="name">Nombre</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="name"
              placeholder="Nombre"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="email"
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <label for="phone">Teléfono</label>
            <input
              type="text"
              class="form-control"
              id="phone"
              v-model="phone"
              placeholder="Teléfono"
            />
          </div>
        </div>
        <div class="description">
          <div class="form-group">
            <label for="description">Descripción</label>
            <textarea
              class="form-control"
              id="description"
              v-model="description"
              placeholder="Descripción"
            ></textarea>
          </div>
        </div>
        <div class="containerFlavors">
          <div class="titleFlavors">
            <h3>Selecciona los sabores</h3>
          </div>
          <div class="flavors">
            <div v-for="flavor in $store.getters.getFlavors" :key="flavor.id">
              <div class="flavor">
                <div class="containerData-flavor">
                  <div class="flavor-image">
                    <img v-bind:src="flavor.img" alt="Logo Pasteleria Carmen" />
                  </div>
                  <div class="flavor-name">
                    <span>{{ flavor.name }}</span>
                  </div>
                  <div class="flavor-price">
                    <span>{{ flavor.price }}</span>
                  </div>
                  <div class="flavor-radioButton">
                    <input
                      type="radio"
                      v-model="selectedflavors"
                      :value="flavor.name"
                      :name="flavorsRadio"
                      
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="containerOrnaments">
          <div class="titleOrnaments">
            <h3>Selecciona los Adornos</h3>
          </div>
          <div class="ornaments">
            <div v-for="ornament in $store.getters.getOrnaments" :key="ornament.id">
              <div class="ornament">
                <div class="containerData-ornament">
                  <div class="ornament-image">
                    <img v-bind:src="ornament.img" alt="Logo Pasteleria Carmen" />
                  </div>
                  <div class="ornament-name">
                    <span>{{ ornament.name }}</span>
                  </div>
                  <div class="ornament-price">
                    <span>{{ ornament.price }}</span>
                  </div>
                  <div class="ornament-checkbox">
                    <input
                      type="checkbox"
                      v-model="selectedOrnaments"
                      :value="ornament.name"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" class="btn btn-pink">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: "OrderComponent",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      description: "",
      selectedflavors: null,
      selectedOrnaments: [],
    };
  },
  methods: {
    onSubmit() {
      event.preventDefault();
      if (this.name === "" || this.email === "" || this.phone === "" || this.description === "") {
        Swal.fire({
          title: "Error",
          text: "Debes completar todos los campos",
          icon: "error",
        });
      }else{
        this.$store.dispatch("addOrder", {
          Nombre: this.name,
          Email: this.email,
          Telefono: this.phone,
          Descripcion: this.description,
          Sabor: this.selectedflavors,
          Adorno: this.selectedOrnaments,
          Precio: '$200.00',
          Accion: 'Pendiente'
        });
        this.$store.dispatch("substractFlavor", this.selectedflavors);
        this.$store.dispatch("substractOrnament", this.selectedOrnaments);
        Swal.fire({
          title: "Gracias",
          text: "Tu pedido ha sido enviado",
          icon: "success",
        });
        this.name = "";
        this.email = "";
        this.phone = "";
        this.description = "";
        this.selectedflavors = null;
        this.selectedOrnaments = [];
      }

      // const order = {
      //   name: this.name,
      //   email: this.email,
      //   phone: this.phone,
      //   description: this.description,
      //   selectedflavors: this.selectedflavors,
      //   selectedOrnaments: this.selectedOrnaments,
      // };
      // console.log(order);
      // this.name = "";
      // this.email = "";
      // this.phone = "";
      // this.description = "";
    },
  },
};
</script>

<style scoped>
.container {
  width: 94%;
  height: 100%;
  /* background-color: #111; */
  border: 3px solid #000;
  margin-top: 150px;
  margin-bottom: 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 0;
}
@media (min-width: 768px) {
  .container {
    margin-top: 100px;
  }
}

.titleContainer {
  width: 100%;
  height: 100px;
  background-color: rgb(252, 207, 252);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid #000;
}
.titleContainer h1 {
  font-family: "Fredoka", sans-serif;
  color: #111;
}
.formularioContainer {
  width: 100%;
  height: 100%;
  background-color: rgb(218, 218, 218);
  font-family: "Fredoka", sans-serif;
  display: flex;
  flex-direction: column;
}
.dataCliente {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  margin-left: 15px;
}

@media (min-width: 768px) {
  .dataCliente {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    margin-left: 15px;
  }
}

.form-group {
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
.description {
  width: 100%;
  height: 100px;
  margin-left: 15px;
  margin-top: 10px;
  margin-bottom: -40px;
}
#description {
  max-height: 70px;
}
.containerFlavors, .containerOrnaments {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.flavors, .ornaments {
  width: 88%;
  height: 100%;
  border: 3px solid #000;
  display: grid;
  padding: 10px;
  grid-template-columns: repeat(2, 1fr);
}
@media (min-width: 768px) {
  .flavors, .ornaments {
    width: 88%;
    height: 100%;
    border: 3px solid #000;
    display: grid;
    padding: 10px;
    grid-template-columns: repeat(4, 1fr);
  }
}
.flavor-image img, .ornament-image img {
  width: 60px;
  height: 60px;
  border-radius: 20%;
  border: 2px solid #000;
}
.containerData-flavor, .containerData-ornament{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
}
@media (min-width: 768px) {
  .containerData-flavor, .containerData-ornament{
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 10px;
  }
}

.btn-pink{
  background-color: rgb(252, 207, 252);
  border: 3px solid #000;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
  left: 60%;
  width: 120px;
}

@media (min-width: 768px) {
  .btn-pink{
    background-color: rgb(252, 207, 252);
    border: 3px solid #000;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    position: relative;
    left: 85%;
    width: 120px;
  }
}

</style>