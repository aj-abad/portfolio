import Vue from 'vue'
import Vuetify from 'vuetify'
import '../assets/vuetify.css'

Vue.use(Vuetify)

const opts = {
    theme: {
        themes: {
            light: {
                secondary: '#E1E8C8',
            },
        },
    },
}

export default new Vuetify(opts)