import { createApp } from 'vue';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* import specific icons */
import { faFacebook, faInstagram, faSteam } from '@fortawesome/free-brands-svg-icons';
import {
  faAngleUp, faChevronUp, faEnvelope, faBars, faXmark, faComputer, faBook, faMusic
} from '@fortawesome/free-solid-svg-icons';
import VScrollLock from 'v-scroll-lock';
// import "./assets/reset.css"
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import App from './App.vue';
import router from './router';

/* add icons to the library */
library.add(faFacebook, faInstagram, faAngleUp, faChevronUp, faEnvelope, faBars, faXmark, faComputer, faSteam, faBook, faMusic);
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.use(VScrollLock);
app.mount('#app');
