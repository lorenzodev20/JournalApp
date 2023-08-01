import journal from '@/modules/daybook/store/journal'
import auth from '@/modules/auth/store'
import { createStore } from 'vuex'


// Create a new store instance.
const store = createStore({
    modules:{
        auth,
        journal
    }
})

export default store