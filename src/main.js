import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(fas);

createApp(App)
    .use(store)
    .use(router)
    .use(VueSweetalert2)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

import "bootstrap/dist/js/bootstrap.js"
