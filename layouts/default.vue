<template>
    <v-app>
        <v-app-bar fixed app>
            <v-container class="d-flex justify-space-between">
                <Logo />
                <v-spacer />
                <v-btn icon>
                    <v-icon>mdi-cart</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </v-container>
        </v-app-bar>
        <v-main>
            <Nuxt />
        </v-main>
        <v-bottom-navigation
            grow
            fixed
            horizontal
            color="primary"
        >
            <v-btn to="/" value="recent">
                <span>Home</span>

                <v-icon>mdi-home</v-icon>
            </v-btn>

            <v-btn to="/product" value="favorites">
                <span>Product</span>

                <v-icon>mdi-shopping-outline</v-icon>
            </v-btn>

            <v-btn value="nearby">
                <span>Profile</span>

                <v-icon>mdi-account-circle-outline</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </v-app>
</template>

<script>
export default {
    name: 'DefaultLayout',
    data() {
        return {
            fixed: false,
        }
    },
}
</script>
