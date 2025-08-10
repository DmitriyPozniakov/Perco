export default {
    namespaced: true,
    state: () => ({
        cartItems: [],
        loading: false,
        error: null
    }),
    mutations: {
        SET_CART_ITEMS(state, items) {
            state.cartItems = items;
        },
        SET_LOADING(state, loading) {
            state.loading = loading;
        },
        SET_ERROR(state, error) {
            state.error = error;
        }
    },
    actions: {
        async fetchCart({ commit, rootState }) {
            commit('SET_LOADING', true)
            try {
                const userId = rootState.auth.user?.uid;
                if (!userId) throw new Error('User ID is missing');

                const res = await fetch(`${process.env.VUE_APP_URL}/users/${userId}/cart`);
                if (!res.ok) throw new Error('Failed to fetch cart');

                const data = await res.json();
                commit('SET_CART_ITEMS', data.cart);
            } catch (error) {
                console.error('Ошибка при загрузке корзины:', error.message);
            } finally {
                commit('SET_LOADING', false)
            }
        },

        async updateCart({ commit, rootState, state }) {
            commit('SET_LOADING', true);
            commit('SET_ERROR', null);

            try {
                const userId = rootState.auth.user?.uid;
                if (!userId) throw new Error('User ID is not found');

                const cartItems = state.cartItems;

                const response = await fetch(`${process.env.VUE_APP_URL}/users/${userId}/cart`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ cartItems })
                });

                if (!response.ok) {
                    const errorData = await response.json().catch(() => null);
                    const message = errorData?.message || 'Error updating cart';
                    throw new Error(message);
                }

                const data = await response.json();
                commit('SET_CART_ITEMS', data.cart);
                commit('SET_LOADING', false);
                return data.cart;
            } catch (error) {
                commit('SET_ERROR', error.message);
                commit('SET_LOADING', false);
                throw error;
            }
        },

        // Увеличить или уменьшить количество товара
        async changeCartItemQuantity({ commit, rootState }, { productId, change }) {
            try {
                const userId = rootState.auth.user?.uid;
                if (!userId) throw new Error('User ID is missing');

                const res = await fetch(`${process.env.VUE_APP_URL}/users/${userId}/cart/${productId}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ change })
                });

                if (!res.ok) {
                    const errorData = await res.json().catch(() => null);
                    const message = errorData?.message || 'Error updating item quantity';
                    throw new Error(message);
                }

                const data = await res.json();
                commit('SET_CART_ITEMS', data.cart);
            } catch (error) {
                console.error('Ошибка при обновлении количества:', error.message);
                commit('SET_ERROR', error.message);
            }
        },

        // Удалить товар из корзины
        async deleteCartItem({ commit, rootState }, productId) {
            try {
                const userId = rootState.auth.user?.uid;
                if (!userId) throw new Error('User ID is missing');

                const res = await fetch(`${process.env.VUE_APP_URL}/users/${userId}/cart/${productId}`, {
                    method: 'DELETE'
                });

                if (!res.ok) {
                    const errorData = await res.json().catch(() => null);
                    const message = errorData?.message || 'Error deleting item from cart';
                    throw new Error(message);
                }

                const data = await res.json();
                commit('SET_CART_ITEMS', data.cart);
            } catch (error) {
                console.error('Ошибка при удалении товара:', error.message);
                commit('SET_ERROR', error.message);
            }
        },

        setCartItems({ commit }, items) {
            commit('SET_CART_ITEMS', items);
        }
    },
    getters: {
        cartTotalPrice(state) {
            return state.cartItems.reduce((sum, item) => sum + item.totalPrice, 0)
        },
        cartTotalQuantity(state) {
            return state.cartItems.reduce((sum, item) => sum + item.quantity, 0)
        },
        isLoading: (state) => state.loading,
    }
}