const app = Vue.createApp({
    data() {
        return {
            showBooks: false,
            books: [
                { title: 'Name of the Wind', author: 'Patrick Rothfuss', img: 'assets/1.jpg', isFav: false },
                { title: 'The Way of Kings', author: 'Brandon Sanderson', img: 'assets/2.jpg', isFav: true },
                { title: 'The Final Empire', author: 'Brandon Sanderson', img: 'assets/3.jpg', isFav: false }
            ],
            x: 0,
            y: 0,
            url: 'http://www.google.es'
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
});

app.mount('#app');