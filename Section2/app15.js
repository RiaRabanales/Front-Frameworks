const app = Vue.createApp({
    data() {
      return {
        showBooks: false,
        books: [
            { title: 'Name of the Wind', author: 'Patrick Rothfuss', img: 'assets/1.jpg', isFav: false },
            { title: 'The Way of Kings', author: 'Brandon Sanderson', img: 'assets/2.jpg', isFav: true },
            { title: 'The Final Empire', author: 'Brandon Sanderson', img: 'assets/3.jpg', isFav: false }
        ],
      }
    },
    methods: {
      toggleShowBooks() {
        this.showBooks =  !this.showBooks
      },
      handleFav(book) {
          book.isFav = !book.isFav
      }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
  })
  
  app.mount('#app')