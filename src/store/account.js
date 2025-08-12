export default {
    namespaced: true,
    state: () => ({
        address: null,
        error: null,
        loading: false,
    }),
    mutations: {
        SET_ADDRESS(state, address) {
            state.address = address;
        },
        SET_ERROR(state, error) {
            state.error = error;
        },
        SET_LOADING(state, loading) {
            state.loading = loading;
        },
    },
    actions: {
        async fetchAddress({ commit }, userId) {
            commit('SET_LOADING', true);
            commit('SET_ERROR', null);
            try {
                const res = await fetch(`${process.env.VUE_APP_URL}/users/${userId}/address`);
                if (!res.ok) {
                    throw new Error(`Ошибка сервера: ${res.status}`);
                }
                const data = await res.json();
                commit('SET_ADDRESS', data);
            } catch (error) {
                commit('SET_ERROR', error.message);
            } finally {
                commit('SET_LOADING', false);
            }
        },
        async updateAddress({ commit }, { userId, addressPayload }) {
            commit('SET_LOADING', true);
            commit('SET_ERROR', null);
            try {
                const res = await fetch(`${process.env.VUE_APP_URL}/users/${userId}/address`, {
                    method: 'POST', // или PUT, в зависимости от API
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(addressPayload),
                });
                if (!res.ok) {
                    throw new Error(`Ошибка сервера: ${res.status}`);
                }
                const data = await res.json();
                commit('SET_ADDRESS', data);
            } catch (error) {
                commit('SET_ERROR', error.message);
            } finally {
                commit('SET_LOADING', false);
            }
        },
    },
    getters: {
        address: (state) => state.address,
        error: (state) => state.error,
        loading: (state) => state.loading,
    },
};
