<template>
    <v-card outlined elevation="0">
        <v-img
            :src="'http://localhost:8000/storage/' + product.images[0]"
            class="align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="150px"
            cover
        >
            <v-card-title class="white--text px-5">{{ product.title }}</v-card-title>
        </v-img>
        <v-card-text class="d-md-flex align-center px-5">
            <p class="blue-grey--text mb-md-0 mb-2 darken-3">{{product.product_category.name}}</p>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <p class="price ma-0 primary--text font-weight-bold">
                Rp. {{ product.price }}
            </p>
        </v-card-text>

        <v-card-actions class="d-flex align-center px-5">
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn size="small" :to="'/product/'+product.slug" color="primary" class="px-5" outlined rounded prepend-icon="mdi-shopping-outline">
                Details
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: {
        product: Object
    },
}
</script>
