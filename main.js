const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      image: "./assets/images/socks_blue.jpg",
      inStock: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 2234, color: "green", image: "./assets/images/socks_green.jpg" },
        { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg" },
      ],
    };
  },

  methods: {
    // Increment the cart data by one
    addToCart() {
      this.cart += 1;
    },

    // Decrement the cart data value by one
    removeFromCart() {
      if (this.cart > 0) this.cart -= 1;
    },

    // Update The image displayed by the new image provided
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
});
