const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    updateCart(id, action) {
      switch (action) {
        case "add":
          this.cart.push(id);
          break;
        case "remove":
          this.cart.pop(id);
          break;

        default:
          alert("An error has occured when updating the cart");
          break;
      }

      console.log(this.cart);
    },
  },
});
