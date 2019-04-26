<template>
    <div class="season-item">
        <v-ons-card>
            <div class="title">{{season.title}}</div>
            <div class="content">
                {{season.content}}
            </div>
        </v-ons-card>
    </div>
</template>

<script>
export default {
    name: 'SeasonItem',
    props: ['season']
}
</script>