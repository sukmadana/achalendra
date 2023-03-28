<template>
    <div>
        <InternalBanner
            :title="'Product'"
            :description="description"
        />
        <div  class="py-15 mb-10">
            <ProductFilter />
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    import axios from 'axios';

export default {
    data() {
        return {
            description: "Here you can check Demos we created you can easily use it. Its quite easy to Create your own dream website & dashboard in No-time."
        }
    },

}
</script>
