import Vue from 'vue'
import Vuetify from 'vuetify'
import '../assets/vuetify.css'

Vue.use(Vuetify)

const opts = {
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: '#aa0602',
            },
        },
    },
}

export default new Vuetify(opts)