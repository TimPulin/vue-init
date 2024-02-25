import '@styles/main.scss';

import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);

// Pinia
import { createPinia } from 'pinia';
const pinia = createPinia();

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

app.use(pinia);
app.use(vuetify);
app.mount('#app');
