<template>
    <v-container>
        <div class="product-section pt-10">
            <v-row>
                <v-col cols="12" md="6">
                    <v-carousel
                        hide-delimiters
                        cycle
                        show-arrows-on-hover
                        height="350"
                    >
                        <v-carousel-item
                            v-for="image in product.images"
                            :src="'http://localhost:8000/storage/' + image"
                            cover
                        ></v-carousel-item>
                    </v-carousel>
                </v-col>
                <v-col cols="12" md="6" class="pl-md-10">
                    <h1 class="mb-5">{{ product.title }}</h1>
                    <h3 class="primary--text mb-10">Rp. {{ product.price }}</h3>

                    <div class="time-picker">
                        <v-row>
                            <v-col cols="6">
                                <v-dialog
                                    ref="dialog_sewa"
                                    v-model="sewa"
                                    :return-value.sync="date_sewa"
                                    persistent
                                    width="290px"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="date_sewa"
                                            label="Tanggal Sewa"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker v-model="date_sewa" scrollable>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="sewa = false"
                                        >
                                            Cancel
                                        </v-btn>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="$refs.dialog_sewa.save(date_sewa)"
                                        >
                                            OK
                                        </v-btn>
                                    </v-date-picker>
                                </v-dialog>
                            </v-col>
                            <v-col cols="6">
                                <v-dialog
                                    ref="dialog"
                                    v-model="kembali"
                                    :return-value.sync="date_kembali"
                                    persistent
                                    width="290px"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="date_kembali"
                                            label="Tanggal Kembali"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                        ></v-text-field>
                                    </template>
                                    <v-date-picker v-model="date_kembali" :min="date_sewa" scrollable>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="kembali = false"
                                        >
                                            Cancel
                                        </v-btn>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="$refs.dialog.save(date_kembali)"
                                        >
                                            OK
                                        </v-btn>
                                    </v-date-picker>
                                </v-dialog>
                            </v-col>
                        </v-row>
                    </div>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>
<script>
export default {
    data() {
        return {
            product: [],
            date_sewa: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10),
            date_kembali: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10),
            sewa: false,
            kembali: false
        }
    },
    mounted() {
        this.getProduct()
    },
    methods: {
        async getProduct() {
            let response = await this.$axios.get(
                `/product/${this.$route.params.slug}`
            )
            this.product = response.data
        },
    },
}
</script>
