app.component("product-details", {
  props: {
    details: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html*/
    `<ul>
        <li v-for="detail in productDetails">{{ detail }}</li>
    </ul>`,
  data() {
    return {};
  },
  methods: {},
  computed: {
    productDetails() {
      return this.details;
    },
  },
});
