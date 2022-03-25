import { createStore } from 'vuex'

export default createStore({
  state: {
    flavors: [
      {
        id: 1,
        name: 'Vainilla',
        img: require("@/assets/img/Sabores/vainilla.jpg"),
        price: '$1.00',
        amount: 10
      },
      {
        id: 2,
        name: 'Zanahoria',
        img: require("@/assets/img/Sabores/zanahoria.jpg"),
        price: '$1.00',
        amount: 10
      },
      {
        id: 3,
        name: 'Café',
        img: require("@/assets/img/Sabores/cafe.jpg"),
        price: '$1.00',
        amount: 10
      },
      {
        id: 4,
        name: 'Coco',
        img: require("@/assets/img/Sabores/coco.png"),
        price: '$1.00',
        amount: 10
      },
      {
        id: 5,
        name: 'Fresa',
        img: require("@/assets/img/Sabores/fresa.jpg"),
        price: '$1.00',
        amount: 10
      },
      {
        id: 6,
        name: 'Naranja',
        img: require("@/assets/img/Sabores/naranja.jpg"),
        price: '$1.00',
        amount: 10
      },
      {
        id: 7,
        name: 'Chocolate',
        img: require("@/assets/img/Sabores/chocolate.jpg"),
        price: '$1.00',
        amount: 10
      },
      {
        id: 8,
        name: 'Limon',
        img: require("@/assets/img/Sabores/limon.jpg"),
        price: '$1.00',
        amount: 10
      },
      {
        id: 9,
        name: 'Piña',
        img: require("@/assets/img/Sabores/pina.jpg"),
        price: '$1.00',
        amount: 10
      }

    ],
    Ornaments: [
      {
        id: 1,
        name: 'Corona',
        img: require("@/assets/img/Adornos/Corona.png"),
        price: '$1.00',
        amount: 10
      },
      {
        id: 2,
        name: 'Gorros',
        img: require("@/assets/img/Adornos/Gorros.png"),
        price: '$1.00',
        amount: 10
      },
      {
        id: 3,
        name: 'Globos',
        img: require("@/assets/img/Adornos/Globos.png"),
        price: '$1.00',
        amount: 10
      },
      {
        id: 4,
        name: 'Mariposas',
        img: require("@/assets/img/Adornos/Mariposas.png"),
        price: '$1.00',
        amount: 10
      },
      {
        id: 5,
        name: 'Animales',
        img: require("@/assets/img/Adornos/Animales.png"),
        price: '$1.00',
        amount: 10
      }
    ],
    Cakes: [
      {
        id: 1,
        name: 'Pastel de Ferrero Rocher',
        img: require("@/assets/img/Pasteles/FerreroRocher.jpg"),
        price: '$250.00'
      },
      {
        id: 2,
        name: 'Tronco Navideño',
        img: require("@/assets/img/Pasteles/TroncoNavideno.jpg"),
        price: '$250.00'
      },
      {
        id: 3,
        name: 'Pastel de Fresa',
        img: require("@/assets/img/Pasteles/Fresa.jpg"),
        price: '$200.00'
      },
      {
        id: 4,
        name: 'Pastel con chispas de chocolate',
        img: require("@/assets/img/Pasteles/Pastel2.png"),
        price: '$200.00'
      },
      {
        id: 5,
        name: 'Pastel de Moras',
        img: require("@/assets/img/Pasteles/Pastel3.png"),
        price: '$200.00'
      },
      {
        id: 6,
        name: 'Pastel de Cereal',
        img: require("@/assets/img/Pasteles/Pastel4.png"),
        price: '$200.00'
      },
      {
        id: 7,
        name: 'Pastel de Cajeta',
        img: require("@/assets/img/Pasteles/Pastel6.png"),
        price: '$200.00'
      }
    ],
    Ordes: [
      {
        Nombre: 'Jesus',
        Email: 'mtn.gm05@gmail.com',
        Telefono: '231 123 4567',
        Descripcion: 'Me gusta el pastel de fresa',
        Sabor: 'Fresa',
        Adorno: ['Corona', 'Gorros'],
        Precio: '$200.00',
        Accion: 'Pendiente' 
      },
      {
        Nombre: 'Manuel',
        Email: 'mtn.gm05@gmail.com',
        Telefono: '231 123 4567',
        Descripcion: 'Me gusta el pastel de coco',
        Sabor: 'Coco',
        Adorno: ['Animales', 'Gorros'],
        Precio: '$200.00',
        Accion: 'Pendiente' 
      },
    ],
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  },
  getters: {
    getFlavors: state => {
      return state.flavors
    },
    getOrnaments: state => {
      return state.Ornaments
    },
    getCakes: state => {
      return state.Cakes
    },
    getOrders: state => {
      return state.Ordes
    }
  },
  mutations: {
    addOrder(state, order) {
      state.Ordes.push(order)
    },
    substractFlavor(state, flavorParam) {
      state.flavors.forEach(flavor => {
        if (flavor.name === flavorParam) {
          flavor.amount--
        }
      })
    },
    substractOrnament(state, ornamentParam) {
      state.Ornaments.forEach(ornament => {
        ornamentParam.forEach(ornamentName => {
          if (ornament.name === ornamentName) {
            ornament.amount--
          }
        })
      })
    },
  },
  actions: {
    addOrder({ commit }, order) {
      commit('addOrder', order)
    },
    substractFlavor({ commit }, flavorParam) {
      commit('substractFlavor', flavorParam)
    },
    substractOrnament({ commit }, ornamentParam) {
      commit('substractOrnament', ornamentParam)
    }
  },
  modules: {
  }
})
