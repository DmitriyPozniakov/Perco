import { createStore } from "vuex";
import products from "./products";
import auth from "./auth";
import cart from "./cart";
import account from "./account";

const store = createStore({
    modules: {
        products,
        auth,
        cart,
        account
    }
});

export default store;