import {createApp} from 'vue'
import 'modern-normalize/modern-normalize.css';
import './styles/main.scss';

import App from './App.vue'

const app = createApp(App);

app.directive('focus', {
    mounted(el) {
        el.focus();
    }
})

app.mount('#app');