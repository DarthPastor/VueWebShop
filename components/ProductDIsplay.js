app.component('product-display', {
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
            <ul>
                  <li v-for="detail in details">{{ detail }}</li>
            </ul>

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
            
            }
        },
        methods: {
            addToCart() {
                this.cart += 1
            },
            removeFromCart() {
                if(this.cart > 0){
                    return this.cart -= 1
                }
            },
            updateVariant(index){
                this.selectedVariant = index
                 
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
            }
        }

})