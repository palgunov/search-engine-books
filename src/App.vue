<template>
  <div id="app">
    <SearchBooks/>
      <NotFound v-if="NOT_FOUND"/> 
      <Modal v-if="MODAL_SHOW"/>
      <Loader v-if="LOADING"/>
      <Error v-if="ERROR"/>
      <Snippets v-if="BOOKS !=[]"/>
      
  </div>

</template>

<script>
import {mapGetters} from 'vuex'
import Error from './components/error.vue'
import Loader from './components/loader.vue'
import Modal from './components/modal.vue'
import SearchBooks from './components/searchBooks.vue'
import Snippets from './components/searchSnippets.vue'
import NotFound from './components/notFound.vue'

export default {
  name: 'App',
  components: {
    Loader,
    Error,
    SearchBooks,
    Snippets,
    Modal,
    NotFound

  },
  computed:{
    ...mapGetters([
      'BOOKS',
      'LOADING',
      'ERROR',
      'MODAL_SHOW',
      'NOT_FOUND'
      ])
  },
  methods:{

  }
}
</script>

<style lang="scss">
body{
    background: rgb(146, 138, 138);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f8f8f8;
  max-width: 900px;
  margin: auto;
  padding-top: 25vh ;
  display: flex;
  flex-direction: column;
  justify-content: center;
    @media (max-width:700px) {
      padding-top: 0;
    }
}
</style>
