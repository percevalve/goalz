<template>
  <f7-page>
    <f7-navbar title="Keyword swiping" back-link="Back"></f7-navbar>
    <!-- <f7-block-title>Welcome to Framework7</f7-block-title> -->
    <f7-block>
        <!-- {{keywords}} -->
        <vue-swing
        @throwout="onThrowout"
        :config="config"
        ref="vueswing"
        >
        <div
            v-for="(keyword, index) in keywords"
            :key="index"
            class="card"
            ref="card"
        >
            <span>{{ keyword.title }}</span>
            <img :src="keyword.imageSrc " width="100%">   
        </div>
        </vue-swing>
    </f7-block>
    <f7-block>
        <f7-row style="margin-top: 500px;">
        <f7-col tag="span">
            <f7-button large fill @click="swipeLeft" color="red">No X</f7-button>
        </f7-col>
        <f7-col tag="span">
            <f7-button large fill @click="swipeRight">Yes ✓</f7-button>
        </f7-col>
        </f7-row>

    </f7-block>
  </f7-page>
</template>
<script>
  import { f7Row, f7Col, f7Page, f7Navbar, f7BlockTitle, f7Block, f7Button } from 'framework7-vue';
  import VueSwing from 'vue-swing'

  // https://source.unsplash.com/900x1600/?nature,water 

  export default {
    components: {
      f7Row,
      f7Col,
      f7Page,
      f7Navbar,
      f7BlockTitle,
      f7Block,
      f7Button,
      'vue-swing': VueSwing
    },
    data () {
        return {
            config: {
                allowedDirections: [
                // VueSwing.Direction.UP,
                // VueSwing.Direction.DOWN,
                VueSwing.Direction.LEFT,
                VueSwing.Direction.RIGHT
                ],
                minThrowOutDistance: window.innerWidth/2,
                maxThrowOutDistance: window.innerWidth/2 + window.innerWidth * 0.01
            },
            // keywords: [],
            imageSrc: 'https://source.unsplash.com/random/800x400'
        }
    },
    mounted () {
        this.$store.dispatch('keywords/load')

        // this.$store.dispatch('keywords/addKeyword', {keyword: this.keywords[0].title})
        // this.loadKeywords()

        // console.log(window.innerWidth)
        // let width = window.innerWidth * 0.8
        // console.log(this.$refs)
        // this.$refs.card.style.width = width + 'px'
        // this.$refs.card.style.left = window.innerWidth/2 - width/2
    },
    methods: {
        swipeLeft () {
            const cards = this.$refs.vueswing.cards
            cards[cards.length - 1].throwOut(
                -500 + Math.random() * 100 - 50,
                -500 + Math.random() * 100 - 50
            )
            this.keywords.pop()
        },
        swipeRight () {
            this.$store.commit('keywords/addSelected', {keyword: Object.assign(this.keywords[this.keywords.length-1])})
            const cards = this.$refs.vueswing.cards
            cards[cards.length - 1].throwOut(
                500 + Math.random() * 100 - 50,
                500 + Math.random() * 100 - 50
            )
            this.keywords.pop()
        },
        getIndex (text) {
            for (let i=0; i<this.keywords.length; i++) {
                if (this.keywords[i].title === text) {
                    return i
                }
            }
        },
        onThrowout ({ target, throwDirection }) {
            let index = this.getIndex(target.textContent)
            console.log(`Threw out ${target.textContent}! ${index}`)

            // add it to the selected keyword if user swipes right
            if (throwDirection === VueSwing.Direction.RIGHT) {
                this.$store.commit('keywords/addSelected', {keyword: Object.assign(this.keywords[index])})
            }


            if (index ===0) {
                this.$f7router.navigate('/home/vote/', {pushState: true, history: true})
            }

        }
    },
    computed: {
        keywords () { 
            return this.$store.state.keywords.keywords
        }
    }
  };
</script>

<style>

.card {
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  font-size: 48px;
  overflow:hidden;
  height: 400px;
  justify-content: start;
  flex-direction: column;
  left: calc(50% - 200px);
  position: absolute;
  top: calc(50%);
  width: 400px;
  max-width: 90%;
}

.card img {

}
</style>