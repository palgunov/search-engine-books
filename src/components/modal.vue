<template>
    <div 
        class="modal"
        >
        <div class="modal__wrapper">
            <div 
                class="modal__btn"
                @click="CHANGE_MODAL_SHOW(false)"
            >
            &#10008;
            </div>
            <div class="modal__book-info book-info">
                <div 
                    class="book-info__title"

                >
                        {{ACTIVE_BOOK.title}}
                </div>
                <div 
                    class="book-info__author"
                    v-for="author in ACTIVE_BOOK.author_name"
                    :key="author"
                >
                    By:{{author}}
                </div>
                <div 
                    class="book-info__cover"
                >
                    <img 
                        v-if="ACTIVE_BOOK.cover_i === undefined"
                        src= "../img/nopic.png" 
                        alt="nopic"
                    >
                    <img 
                        v-else
                        :src="(`http://covers.openlibrary.org/b/id/${ACTIVE_BOOK.cover_i}-L.jpg `)" 
                        :alt="'cover ' + ACTIVE_BOOK.title"
                    >
                </div>
                <div 
                    class="book-info__publisher-isbn"
                >
                    <p>Publisher:</p>
                    <span 
                        v-for="publisher in ACTIVE_BOOK.publisher"
                        :key="publisher"
                    >
                       {{publisher}}
                    </span>
                </div>
                <div 
                    class="book-info__publisher-isbn"
                >
                    <p>Isbn:</p>
                    <span
                        v-for="isbn in ACTIVE_BOOK.isbn"
                        :key="isbn"
                    >
                        {{isbn}}
                    </span>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
    name:"Modal",
    computed:{
        ...mapGetters(['ACTIVE_BOOK'])
    },
    methods:{
        ...mapMutations(['CHANGE_MODAL_SHOW'])
    }
    
}
</script>

<style lang="scss" scoped>
    .modal {
        width: 100%;
        height: 100%;

		&__wrapper {
            background: #23232396;
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 10000;
            overflow: auto;
		}
        &__btn{
            margin: 10px;
            text-align: center;
            cursor: pointer;
            display: flex;
            justify-content: center;
            font-size: 25px;
            width: 45px;
            height: 40px;
            border-radius: 100%;
            background: #666f65fa
        }

		&__book-info {
            margin: auto;
		}
}
.book-info {
    background: #666f65fa;
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    width: 50vw;
    height: 80vh;
    padding: 15px;
        @media (max-width:800px) {
            width: 80vw;
        }
		&__title {
            width: 60%;
            margin: 15px;
            font-size: 25px;
                @media (max-width:800px) {
                    margin:0 0 5px 0;
                    font-size: 15px;
                }
		}

		&__author {
            width: 60%;
		}

		&__cover {
            width: 30%;
			img {
                width: 150px;
                @media (max-width:700px) {
                    width: 100%;
                    margin: auto;
                }
			}
		}

		&__publisher-isbn {
            width: 47%;
            text-align: justify;
            padding: 0.5%;
            overflow-y: auto;
            max-height: 30vh;
            margin: auto;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            position: relative;
                @media (max-width:700px) {
                    justify-content: left;
                    width: 100%;
                    max-height: 20vh;
                }
                p{
                    width: 100%;
                    text-align: center;
                    position: sticky;
                    background-color: #666e64;
                    top: -5px;
                    padding: 2px;
                }
                span{
                    font-size: 12px;
                        &:after{
                            content: " | ";

                        }
                    
                }
		}
}


</style>