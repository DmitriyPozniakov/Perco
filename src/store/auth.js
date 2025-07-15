import { auth } from "@/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInAnonymously } from "firebase/auth";

export default {
    namespaced: true,
    state: () => ({
        user: null,
        error: null,
        loading: false,
    }),
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        },
        SET_ERROR(state, error) {
            state.error = error;
        },
        SET_LOADING(state, loading) {
            state.loading = loading;
        },
    },
    actions: {
        async signUp({ commit }, { email, password }) {
            commit('SET_LOADING', true);
            commit('SET_ERROR', null);
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                commit('SET_USER', userCredential.user);
            } catch (error) {
                commit('SET_ERROR', error.message);
            } finally {
                commit('SET_LOADING', false);
            }
        },
        async signIn({ commit }, { email, password }) {
            commit('SET_LOADING', true);
            commit('SET_ERROR', null);
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                commit('SET_USER', userCredential.user);
            } catch (error) {
                commit('SET_ERROR', error.message);
            } finally {
                commit('SET_LOADING', false);
            }
        },
        async signInAnon({ commit }) {
            commit('SET_LOADING', true);
            commit('SET_ERROR', null);
            try {
                const userCredential = await signInAnonymously(auth);
                commit('SET_USER', userCredential.user);
            } catch (error) {
                commit('SET_ERROR', error.message);
            } finally {
                commit('SET_LOADING', false);
            }
        },
        // слушатель изменения статуса аутентификации
        listenAuthStateChange({ commit }) {
            auth.onAuthStateChanged(user => {
                commit('SET_USER', user);
            });
        }
    },
    getters: {
        isAuthenticated: (state) => !!state.user,
        currentUser: (state) => state.user,
        currentUserUid: state => state.user?.uid || null,
        authError: (state) => state.error,
        isLoading: (state) => state.loading,
    },
};
