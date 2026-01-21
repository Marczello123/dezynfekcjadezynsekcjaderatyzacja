import Vue from 'vue'
import Router from 'vue-router'

import privacyPolicy from 'PrivatePolicy'

Vue.use(Router)

export default new Router ({
    routes: [
        {
            path: '/',
            name: 'polityka-prywatności',
            component: PrivatePolicy
        }
    ]
})