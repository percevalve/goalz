import Vue from 'vue'
import axios from 'axios'

let _axios = axios.create({
    // Imporant to allow cross-origin sessions
    withCredentials: false
})

Vue.prototype.$http = axios
// eslint-disable-next-line no-undef
_axios.defaults.baseURL = 'http://life-goalz.severin-hatt.com/'
_axios.defaults.xsrfHeaderName = 'X-CSRFToken'
_axios.defaults.xsrfCookieName = 'csrftoken'

  
export default {
    addVoteIssue (description) {
        return _axios({
            url: 'vote/add_issue/',
            method: 'post',
            data: {
                description
            }
        })
    },
    sendVote (issueID, score) {
        return _axios({
            url: 'vote/' + issueID,
            method: 'post',
            data: {
                grade: score
            }
        })
    }
}
