<template>
    <div class="search">
        <h1>Library</h1>
        <hr>
        <div class="search__wrapper">
            <label 
                    for="input"
                >
                <input
                class="search__string" 
                type="text"
                placeholder="Title book"
                v-model="inputValue"
                @keyup="CHANGE_SEARCH_QUERY(inputValue),delayLoading(1000)"
                >
            </label>
            <div
                class="search__btn"
                @click="delayLoading(1)"
                >
                    &#128269;
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
export default {
    name : 'SearchBooks',
    data () {
        return{
            inputValue: '',
            delay: Function,
            }
    },
    computed:{
        ...mapGetters(['SEARCH_QUERY'])
  },
    methods:{
        ...mapMutations(['CHANGE_SEARCH_QUERY','LIST_BOOKS']),
        ...mapActions(['LOAD_BOOKS']),
        delayLoading(delayOn){
            this.LIST_BOOKS([])
            clearTimeout(this.delay)
            if(this.inputValue){
                this.delay = setTimeout(()=>{
                    this.LOAD_BOOKS()
                },delayOn)
            }
        }
    }
}
   
</script>
<style lang="scss" scoped>
.search {
    background: url("../assets/searchBg.png") no-repeat;
    background-size: 100%;
    padding: 5px 0;
    border-radius:25px;
    box-shadow:inset 0 0 10px #000000;
		&__wrapper {
            padding: 10px;
            position: relative;
            display: flex;
            justify-content: center;
		}
		&__string {
            height: 45px;
            outline:none;
            font-size: 20px;
            color: white;
            padding-left: 25px;
            padding-right: 55px;
            border-radius: 15px 0px 0px 15px;
            background: url("../assets/inputBg.png") no-repeat;
            border:none;
                @media(max-width:400px) {
                    font-size: 15px;
                }
		}
		&__btn {
            height: 47px;
            font-size: 30px;
            border-radius: 0 15px 15px 0;
            width: 50px;
            border: none;
            background: #2c3e50;
            transition: 0.5s;
            &:hover{
            background: #5a636d;
            }
        }
    }
</style>
