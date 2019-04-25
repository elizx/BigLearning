<template>
    <div>
        <v-ons-card>
            <div class="title">{{volume.name}}</div>
        </v-ons-card>
    </div>
</template>

<script>
export default {
    name: 'VolumeItem',
    props: ['volume']
}
</script>