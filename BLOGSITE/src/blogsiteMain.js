import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// MDI Icons
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css';

// Pinia Store
import { createPinia } from 'pinia'

import App from './components/App.vue'

import blogSiteInfo from "./assets/conf/blogSiteInfo.json";

const pinia = createPinia()

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
});

createApp(App).use(vuetify).use(pinia).mount('#app');

document.title = blogSiteInfo.name;
