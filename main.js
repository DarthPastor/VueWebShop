const app = Vue.createApp ({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id: 2234, color: 'green'},
                {id: 2235, color: 'blue' },
            ],
            sizes: [
                {id: 2236, size: 'S'},
                {id: 2237, size: 'M'},
                {id: 2238, size: 'L'},
            ] 
        }
    }
})
