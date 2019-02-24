<template>
  <f7-page>
    <f7-navbar title="Vote for your life goalz" back-link="Back"></f7-navbar>
    <f7-block v-for="(keyword, index) in keywords" :key="index" strong>
        <f7-block-title>{{keyword.title}}</f7-block-title>
        <f7-range
            v-model="votes[index]"
            :min="0"
            :max="10"
            :label="true"
            :step="1"
            :value="5"
            :scale="true"
            :scale-steps="5"
            :scale-sub-steps="4"
            :ref="'vote' + index"
            @range:change="setVote(index)"
        ></f7-range>
    </f7-block>
    <f7-block>
        <f7-row >
        <f7-col tag="span">
            <p style="text-align: center; margin: 0; padding: 0">Points submitted</p>
            <h3 style="text-align: center; margin: 0; padding: 0">{{totalPoints}}</h3>
        </f7-col>
        <f7-col tag="span">
            <f7-button large fill @click="displayNotification">Fill</f7-button>
        </f7-col>
        </f7-row> 
    </f7-block>   
  </f7-page>
</template>
<script>
  import { f7Row, f7Col, f7Toolbar, f7Page, f7Navbar, f7BlockTitle, f7Block, f7Button, f7Range } from 'framework7-vue';
  import Vue from 'vue'

  export default {
    components: {
      f7Row,
      f7Col,
      f7Toolbar,
      f7Page,
      f7Navbar,
      f7BlockTitle,
      f7Block,
      f7Button,
      f7Range
    },
    data () {
        return {
            votes: []
        }
    },
    mounted () {
        let self = this
        this.$store.dispatch('keywords/load').then(res => {
            for (let i=0; i<self.keywords.length; i++) {
                self.votes.push(5)
            }
        })
    },
    
    methods: {
        setVote (i) {
            let val = this.$refs['vote' + i]
            let score = val[0].f7Range.getValue()
            this.votes.splice(i, 1, score)
        },
        displayNotification() {
            let self = this
            self.notification = this.$f7.notification.create({
                icon: '<i class="icon icon-message"></i>',
                title: 'New Message recieved',
                titleRightText: 'now',
                subtitle: 'Well done! Your next appointment will be on ...',
                text: 'Click me to close',
                closeOnClick: true,
                on: {
                    notificationClick() {
                        self.$f7router.navigate('/home/messages/', {pushState: true, history: true})
                        self.notification.close()
                    }
                }
            })
            self.notification.open()
            // window.setTimeout(() => self.notification.close(), 2000)

            self.$store.dispatch('messages/addGoalz', {message: {
              text: 'Well done! Your next appointment will be on Monday. You are making smaller steps towars your goals!',
            }});
        }
    },
    computed: {
        keywords () {
            return this.$store.state.keywords.selectedKeywords
        },
        totalPoints () {
            let sum=0
            for (let i=0; i<this.votes.length; i++) {
                sum = sum + this.votes[i]
            }
            return Math.floor(sum)
        }
    }
  };
</script>
