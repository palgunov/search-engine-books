import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: Array,
    loading: false,
    error: false,
    searchQuery: "",
    url: `http://openlibrary.org/search.json?title=`,
    bookID: Number,
    modalShow: false,
    notFound: false
    
  },
  getters:{

    BOOK_ID(state) {
      return state.bookID
    },
    BOOKS(state) {
      return state.books
    },
    LOADING(state){
      return state.loading
    },
    ERROR(state){
      return state.error
    },
    SEARCH_QUERY(state){
      return state.searchQuery
    },
    MODAL_SHOW(state){
      return state.modalShow
    },
    ACTIVE_BOOK(state){
      return state.books[state.bookID]
    },
    NOT_FOUND(state){
      return state.notFound
    }
  },
  mutations: {
    LIST_BOOKS (state, booksLIst) {
      state.books = booksLIst
    },
    CHANGE_URL(state, title){
      state.url = state.url + title
    },
    CHANGE_SEARCH_QUERY(state, newSearchQuery ){
      state.searchQuery = newSearchQuery
    },
    CHANGE_BOOK_ID(state, newID ){
      state.bookID = newID
    },
    CHANGE_MODAL_SHOW(state, boolean){
      state.modalShow = boolean
    },
    CHANGE_NOT_FOUND(state, boolean){
      state.notFound = boolean 

    }
  },
  actions: {
    async LOAD_BOOKS ({commit}) {
      commit('CHANGE_NOT_FOUND',false)
      this.state.loading = true
      await fetch(`http://openlibrary.org/search.json?title=${this.state.searchQuery}`)
        .then(res => res.json())
        .then(
          (result) => {
            this.state.loading = false
            if(!result.docs.length){
              commit('CHANGE_NOT_FOUND', true)
            }else{
              commit('LIST_BOOKS', result.docs)
            }
          },
          (error) => {
            this.state.loading = false
            this.state.error = true
            console.log(error)
          }
        )
    }
  },
  modules: {
    
  }
})
