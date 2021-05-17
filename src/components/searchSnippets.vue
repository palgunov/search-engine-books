<template>
    <div 
        class="snippets"
        >
        <div 
        class="snippets__snippet snippet"
        v-for="(book,i) in BOOKS"
        :key="i"
        @click="CHANGE_BOOK_ID(i), CHANGE_MODAL_SHOW(true)"
        >
            <img 
                v-if="book.cover_i === undefined"
                class="snippet__img_no-pic"
                src= "../img/nopic.png" 
                alt="nopic"
            >
            <img class="snippet__img" 
                v-else
                :src= "imgUrl(book.cover_i, 'M')"
                :alt="book.title+'_cover'"
            >
            <div class="info">
                <span
                    class="info__title"
                >
                <h4>{{book.title}}</h4>
                </span>
                <br>
                <span
                    class="info__author"
                    v-for="author,i in book.author_name"
                    :key ="i+author"
                >
                   By: {{author}}
                </span>
            </div>

        </div>
    </div>
    
</template>


<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
    name:"SearchSnippets",
    computed:{
        ...mapGetters(['BOOKS'])
    },
    methods:{
        ...mapMutations(['CHANGE_BOOK_ID','CHANGE_MODAL_SHOW']),
        imgUrl(address, size){
            return `http://covers.openlibrary.org/b/id/${address}-${size}.jpg`
        }

    }
}
</script>

<style lang="scss" scoped>

.snippets {
    width: 90%;
    height: 40vh;
    margin: auto;
    overflow: hidden;
    overflow-y: auto;
        &__snippet{
            margin: 2px;
        }
    .snippet {
        background: rgb(114, 104, 104);
        display: flex;
        cursor: pointer;
        &__img {
            max-width: 60px;
            margin: 5px;
                &_no-pic{
                    height: 100px;
                }
        }
        .info {
            display: flex;
            margin: auto;
            width: 70%;
            flex-wrap: wrap;
            justify-content: space-around;
                &__title {
                    width: 100%;
                }
                &__author {
                    width: 100%;
                }
        }
    }
}

</style>
