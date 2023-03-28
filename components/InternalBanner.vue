<template>
    <div>
        <div class="mini-spacer py-15 secondary">
            <v-container>
                <!-- -----------------------------------------------
              Start Banner Text
          ----------------------------------------------- -->
                <v-row>
                    <v-col cols="12" sm="10" md="9" lg="7">
                        <div class="text-left">
                            <h1 class="ui-title mb-5 font-weight-bold">{{ title }}</h1>
                            <p class="text-muted">
                                {{ description }}
                            </p>
                        </div>
                    </v-col>
                </v-row>

                <!-- -----------------------------------------------
              End Banner Text
          ----------------------------------------------- -->
            </v-container>
        </div>
    </div>
</template>
<script>
export default {
    props : {
        title: String,
        description: String
    },
}
</script>
