<template>
    <v-container class="py-15 my-10">
        <div class="section-header mb-10">
            <h3 class="text-h3 text-md-h4">Destinasi Favorit</h3>
        </div>
        <v-row>
            <v-col v-for="n in 3" cols="12" md="4">
                <DestinationItem />
            </v-col>
        </v-row>
    </v-container>
</template>
