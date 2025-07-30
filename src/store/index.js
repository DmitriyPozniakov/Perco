import { createStore } from "vuex";
import products from "./products";
import auth from "./auth";
import cart from "./cart";

const store = createStore({
    modules: {
        products,
        auth,
        cart
    }
});

export default store;