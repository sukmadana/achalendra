<template>
    <v-container>
        <div class="section-title mb-10">
            <h3 class="text-h3">Produk</h3>
        </div>
        <v-row dense>
            <v-col v-for="product in products" :key="product.id" cols="6" md="3">
                <ProductItem :product="product" />
            </v-col>
        </v-row>
        <div class="d-flex justify-center mt-15">
            <v-btn rounded outlined class="py-6 px-10" color="primary" size="x-large">Lihat Lebih Banyak</v-btn>
        </div>
    </v-container>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
export default {
    computed: {
        ...mapGetters({
            products: 'product/getProduct',
        }),
    },

    async mounted() {
        await this.$store.dispatch('product/fetchProduct')
    },
}
</script>
