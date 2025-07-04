const VUE_APP_API_URL = process.env.VUE_APP_API_URL

export default {
    namespaced: true,
    state: () => ({
        all: [],
        filtered: [],
        loading: true
    }),
    mutations: {
        SET_PRODUCTS(state, products) {
            state.all = products;
        },
        SET_FILTERED(state, products) {
            state.filtered = products;
        },
        SET_LOADING(state, value) {
            state.loading = value
        }
    },
    actions: {
        async fetchAllProducts({ commit }) {
            commit('SET_LOADING', true)
            try {
                const res = await fetch(`${VUE_APP_API_URL}/products`);
                const data = await res.json();
                commit('SET_PRODUCTS', data);
            } catch (err) {
                console.error('Ошибка загрузки всех товаров:', err)
            } finally {
                commit('SET_LOADING', false);
            }
        },
        async fetchProductsByCategory({ commit }, category) {
            commit('SET_LOADING', true)
            try {
                const res = await fetch(`https://perco-back.onrender.com/products/category/${category}`);
                const data = await res.json();
                commit('SET_FILTERED', data);
            } catch (err) {
                console.error('Ошибка загрузки категорий:', err)
            } finally {
                commit('SET_LOADING', false);
            }
        }
    },
    getters: {
        allProducts: (state) => state.all,
        filteredProducts: (state) => state.filtered,
        isLoading: (state) => state.loading
    }
}