import journal from '@/modules/daybook/store/journal'
import { createStore } from 'vuex'


// Create a new store instance.
const store = createStore({
    modules:{
        journal
    }
})

export default store