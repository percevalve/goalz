import api from '@/api'

const state = {
    keywords: [],
    selectedKeywords: [],
}

const getters = {

}

const actions = {
    addKeyword({commit}, keyword) {
        return api.addVoteIssue(keyword)
    },
    load ({commit}) {
        let randomkeywords = [
            'professional footballer', 
            'gym',
            'football boots',
            'mates',
            'day',
            'sports',
            'money',
            'weights',
            'passion',
            'training',
            'time'
        ]
        let keywords = []
        for (let i=0; i<10; i++) {
            api.addVoteIssue(randomkeywords[i]).then(res => {
                keywords.push({
                    id: res.data.issue_id,
                    title: randomkeywords[i],
                    imageSrc: 'https://source.unsplash.com/900x1600/?' + randomkeywords[i]
                })
    
            })
        }
        commit('setKeywords', {keywords})

        return new Promise((resolve, reject) => {resolve()})
    },
    sendVotes ({state, commit}, {scores}) {
        for (var i=0; i<scores.length; i++) {
            api.sendVote(state.selectedKeywords[i].id, scores[i])
        }
    }
}

const mutations = {
    setKeywords (state, {keywords}) {
        state.keywords = keywords
    },
    addSelected (state, {keyword}) {
        state.selectedKeywords.push(keyword)
    }
}

export default {
    namespaced: true,
    mutations,
    state,
    getters,
    actions
}
