const VUE_APP_API_URL = process.env.VUE_APP_API_URL

export default {
    namespaced: true,
    state: () => ({
        all: [],
        filtered: [],
    }),
    mutations: {
        SET_PRODUCTS(state, products) {
            state.all = products;
        },
        SET_FILTERED(state, products) {
            state.filtered = products;
        }
    },
    actions: {
        async fetchAllProducts({ commit }) {
            try {
                const res = await fetch(`${VUE_APP_API_URL}/products`);
                const data = await res.json();
                commit('SET_PRODUCTS', data);
            } catch (err) {
                console.error('Ошибка загрузки всех товаров:', err)
            }
        },
        async fetchProductsByCategory({ commit }, category) {
            try {
                const res = await fetch(`https://perco-back.onrender.com/products/category/${category}`);
                const data = await res.json();
                commit('SET_FILTERED', data);
            } catch (err) {
                console.error('Ошибка загрузки категорий:', err)
            }
        }
    },
    getters: {
        allProducts: (state) => state.all,
        filteredProducts: (state) => state.filtered
    }
}