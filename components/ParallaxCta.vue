<template>
    <v-parallax src="/images/tegal-lalang-rf.jpg">
        <div
            class="d-flex parallax-content flex-column fill-height justify-center align-center text-white"
        >
            <h1 class="text-h3 mb-4">Pilih Produkmu saat ini juga!</h1>
            <h4 class="subheading mb-10">
                Achalendra outdoor mempermudah kegiatan outdoor bersama temanmu.
            </h4>
            <v-btn
                color="primary"
                rounded
                x-large
                class="px-10"
                prepend-icon="mdi-home"
            >
                Pesan Sekarang!
            </v-btn>
        </div>
    </v-parallax>
</template>

<style>
.v-parallax__content::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #000000;
    opacity: 0.3;
    z-index: 1;
}

.parallax-content {
    position: relative;
    z-index: 2;
}
</style>
