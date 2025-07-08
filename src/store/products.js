export default {
    namespaced: true,
    state: () => ({
        all: [],
        filtered: [],
        selected: null,
        selectedType: [],
        loading: true
    }),
    mutations: {
        SET_PRODUCTS(state, products) {
            state.all = products;
        },
        SET_FILTERED(state, products) {
            state.filtered = products;
        },
        SET_SELECTED_PRODUCT(state, product) {
            state.selected = product;
        },
        SET_TYPE_PRODUCTS(state, products) {
            state.selectedType = products;
        },
        SET_LOADING(state, value) {
            state.loading = value
        }
    },
    actions: {
        async fetchAllProducts({ commit }) {
            commit('SET_LOADING', true)
            try {
                const res = await fetch(`${process.env.VUE_APP_URL}/products`);
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
                const res = await fetch(`${process.env.VUE_APP_URL}/products/category/${category}`);
                const data = await res.json();
                commit('SET_FILTERED', data);
            } catch (err) {
                console.error('Ошибка загрузки категорий:', err)
            } finally {
                commit('SET_LOADING', false);
            }
        },
        async fetchProductById({ commit }, id) {
            commit('SET_LOADING', true)
            try {
                const res = await fetch(`${process.env.VUE_APP_URL}/products/${id}`);
                const data = await res.json();
                commit('SET_SELECTED_PRODUCT', data);
            } catch (err) {
                console.error('Ошибка загрузки товара:', err);
                commit('SET_SELECTED_PRODUCT', null);
            } finally {
                commit('SET_LOADING', false);
            }
        },
        async fetchProductsByType({ commit }, type) {
            try {
                const res = await fetch(`${process.env.VUE_APP_URL}/products/type/${type}`);
                const data = await res.json();
                commit('SET_TYPE_PRODUCTS', data);
            } catch (err) {
                console.error('Ошибка загрузки типов:', err)
            }
        }
    },
    getters: {
        allProducts: (state) => state.all,
        filteredProducts: (state) => state.filtered,
        isLoading: (state) => state.loading,
        productById: (state) => state.selected,
        typeProducts: (state) => state.selectedType
    }
}