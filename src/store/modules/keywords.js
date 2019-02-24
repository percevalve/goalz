

const state = {
    keywords: []
}

const getters = {

}

const actions = {
    load ({commit}) {
        let randomkeywords = [
            'proffesional footballer', 
            'gym',
            'footabll boots',
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
            keywords.push({
                title: randomkeywords[i],
                imageSrc: 'https://source.unsplash.com/900x1600/?' + randomkeywords[i]
            })
        }
        commit('setKeywords', {keywords})

        return new Promise((resolve, reject) => {resolve()})
    }
}

const mutations = {
    setKeywords (state, {keywords}) {
        state.keywords = keywords
    }
}

export default {
    namespaced: true,
    mutations,
    state,
    getters,
    actions
}
