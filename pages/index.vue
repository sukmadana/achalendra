<template>
    <div>
        <v-container class="mt-5">
            <HomepageBanner />
        </v-container>
        <div class="category-list">
            <v-container>
                <v-row>
                    <v-col cols="12" md="6" >
                        <v-card class="rounded-0" elevation="0" dense>
                            <v-img
                                src="/images/glen-jackson-mzZVGFfMOkA-unsplash.jpg"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                class="d-flex align-center justify-center"
                                height="350px"
                                cover
                            >
                            <v-card-item class="text-center d-flex justify-center flex-column">
                                <v-card-title class="white--text d-inline-block px-5">Category</v-card-title>
                                <v-btn text color="primary d-inline-block">View</v-btn>
                            </v-card-item>
                            </v-img>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="6" >
                        <v-card class="rounded-0" elevation="0" dense>
                            <v-img
                                src="/images/glen-jackson-mzZVGFfMOkA-unsplash.jpg"
                                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                class="d-flex align-center justify-center"
                                height="350px"
                                cover
                            >
                            <v-card-item class="text-center d-flex justify-center flex-column">
                                <v-card-title class="white--text d-inline-block px-5">Category</v-card-title>
                                <v-btn text color="primary d-inline-block">View</v-btn>
                            </v-card-item>
                            </v-img>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div class="product-list py-lg-16 my-lg-15 py-15">
            <ProductList />
        </div>
        <ParallaxCta />
        <DestinationList />
    </div>
</template>

<script>
export default {
    name: 'IndexPage',
}
</script>
