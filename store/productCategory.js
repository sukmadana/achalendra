import axios from 'axios'

export const state = () => ({
    productCategory: null,
})

export const getters = {
    getProductCategory: (state) => state.productCategory,
}

export const mutations = {
    FETCH_PRODUCT_CATEGORY_SUCCESS(state, productCategory) {
        state.productCategory = productCategory
    },

    FETCH_PRODUCT_CATEGORY_FAILURE(state) {
        state.productCategory = null
    },
}

export const actions = {
    async fetchProductCategory({ commit }) {
        try {
            const { data } = await this.$axios.get('/product-category')

            commit('FETCH_PRODUCT_CATEGORY_SUCCESS', data.data)
        } catch (e) {
            commit('FETCH_PRODUCT_CATEGORY_FAILURE')
        }
    },
}
