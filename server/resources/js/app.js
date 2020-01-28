require('./bootstrap');

window.Vue = require('vue');

Vue.component('home-component', require('../views/Home.vue').default);

const home = new Vue({
    el: "#app"
});

const sample = new Vue({
    el: "#sample"
})