app.component('product-display', {

    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },

    template:
    /*html*/
    `
    <div class="product-display">
        <div class="product-container">
        
            <div class="product-image">
                <img :src="image" :class="{ 'out-of-stock-img': !inStock }">
            </div>
        
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p>{{ Sale }}</p>
                <p v-if="inStock">In Stock</p> <!--can also use "v-show" for toggling elements VISIBILITY-->
                <p v-else>Out of Stock</p>

                <p>Shipping: {{ shipping }}</p>

                <product-details :details="details"></product-details>

                <div 
                    v-for="(variant, index) in variants" 
                    :key="variant.id" 
                    @mouseover="updateVariant(index)"
                    class="color-circle"
                    :style="{ backgroundColor: variant.color }"> <!--can bind styles object from the data-->
                </div>
            
                <button 
                    class="button" 
                    :class="{ disabledButton: !inStock }"
                    @click="addToCart"
                    :disabled="!inStock">
                    Add to Cart
                </button>
            
                <button 
                class="button"
                :class="{ disabledButton: !inStock }" 
                @click="removeFromCart">
                Remove Item
                </button>
            </div>
        </div>
        <review-list v-if="reviews.length" :reviews="reviews"></review-list>
        <review-form @review-submitted="addReview"></review-form>
    </div> 
        `,

        data() {
            return {
                onSale: true,
                product: 'Socks',
                brand: 'Vue Mastery',
                selectedVariant: 0,
                details: ['50% cotton', '30% wool', '20% polyester'],
                variants: [
                    {id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
                    {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
                ],
                reviews: []
            
            }
        },
        methods: {
            addToCart() {
                this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
            },
            removeFromCart() {
                this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
            },
            updateVariant(index) {
                this.selectedVariant = index   
            },
            addReview(review) {
                this.reviews.push(review)
            }
        },
        computed: {
            Sale(){
                if(onSale = true) {
                    return `On SALE 20% off!!!`
                }
            },
            title() {
                return this.brand + '' + this.product
            },
            image() {
                return this.variants[this.selectedVariant].image
            },
            inStock() {
                return this.variants[this.selectedVariant].quantity
            },
            shipping() {
                if(this.premium) {
                    return 'Free'
                }
                return 2.99
            }
        }
})