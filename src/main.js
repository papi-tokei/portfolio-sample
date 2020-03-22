import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' // ←ここに追加

Vue.config.productionTip = false

new Vue({
    vuetify, // ←ここに追加
    render: h => h(App),
}).$mount('#app')