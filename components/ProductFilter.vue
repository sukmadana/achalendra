<template>
    <v-container>
        <v-row>
            <v-col cols="4" class="hidden-sm-and-down">
                <v-card outlined>
                    <v-card-title class="mb-5">Category</v-card-title>
                    <v-card-text>
                        <v-checkbox
                            v-for="cat in categories"
                            :key="cat.id"
                            :label="cat.name"
                            color="primary"
                            :value="cat.id"
                            v-model="filterCategory"
                            hide-details
                        ></v-checkbox>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" sm="8">
                <v-row>
                    <v-col
                        v-for="product in products"
                        :key="product.id"
                        cols="6"
                        sm="4"
                    >
                        <ProductItem :product="product" />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
export default {
    data() {
        return {
            page: 1,
            filterCategory: []
        }
    },
    computed: {
        ...mapGetters({
            products: 'product/getProduct',
            categories: 'productCategory/getProductCategory'
        }),
    },

    async mounted() {
        await this.$store.dispatch('product/fetchProduct')
        await this.$store.dispatch('productCategory/fetchProductCategory')
    },
}
</script>
