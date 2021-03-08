// Creo una app de Vue:
const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The Way of Kings',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods: {
        changeTitle(title) {
            this.title = 'Words of Radiance',
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
});

// Indico en qué parte del código monto esta app:
app.mount('#app');