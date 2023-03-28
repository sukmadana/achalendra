import axios from 'axios'

export const state = () => ({
    product: null,
})

export const getters = {
    getProduct: (state) => state.product,
}

export const mutations = {
    FETCH_PRODUCT_SUCCESS(state, product) {
        state.product = product
    },

    FETCH_PRODUCT_FAILURE(state) {
        state.product = null
    },
}

export const actions = {
    async fetchProduct({ commit }) {
        try {
            const { data } = await this.$axios.get('/product')

            commit('FETCH_PRODUCT_SUCCESS', data.data)
        } catch (e) {
            commit('FETCH_PRODUCT_FAILURE')
        }
    },
}
