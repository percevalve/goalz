import messageService from '../../services/messageService'

const state = {
  messages: [
    {
      type: 'sent',
      text: 'What motivates you?',
      name: 'Life Goalz',
      avatar: 'https://cdn.framework7.io/placeholder/people-100x100-9.jpg'
    },
    {
      type: 'received',
      text: 'Sport is a passion of mine. I really want to be professional footballer, but I don’t even have the money for some football boots. I used to play with my mates every day but they don’t want to talk to me any more.',
      name: 'Jacob',
      avatar: 'https://cdn.framework7.io/placeholder/people-100x100-7.jpg'
    }    
  ]
}

const getters = {
  messages: state => {
    return state.messages
  }
}

const actions = {
  // getMessages ({ commit }) {
  //   messageService.fetchMessages()
  //   .then(messages => {
  //     commit('setMessages', messages)
  //   })
  // },
  add({ commit }, {message}) {
    commit('addMessage', message)
    // messageService.postMessage(message)
    // .then(() => {`
    //   commit('addMessage', message)
    // })
  },
  addGoalz({commit, dispatch}, {message}) {
    message['name'] = 'Life Goalz'
    message['type'] = 'sent'
    message['avatar'] = 'https://cdn.framework7.io/placeholder/people-100x100-9.jpg'
    dispatch('add', {message})
  },
  addJacob({commit, dispatch}, {message}) {
    message['name'] = 'Jacob'
    message['type'] = 'received'
    message['avatar'] = 'https://cdn.framework7.io/placeholder/people-100x100-7.jpg'
    dispatch('add', {message})

  }
  // deleteMessage( { commit }, msgId) {
  //   messageService.deleteMessage(msgId)
  //   commit('deleteMessage', msgId)
  // }
}

const mutations = {
  setMessages (state, messages) {
    state.messages = messages
  },
  addMessage(state, message) {
    state.messages.push(message)
  },
  deleteMessage(state, msgId) {
    state.messages = state.messages.filter(obj => obj.pk !== msgId)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}