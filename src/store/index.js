import Vue from 'vue'
import Vuex from 'vuex'
import messages from './modules/messages'
import keywords from './modules/keywords'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    messages,
    keywords
  }
})