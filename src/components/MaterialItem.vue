<template lang="html">
    <div>
        <v-ons-card>
            <div class="title">{{material.name}}</div>
            <div class="card">{{material.content}}</div>
        </v-ons-card>
        <div class="question-group">
            <v-ons-list v-for="question in material.questions" :key="question.id">
                <v-ons-list-header>{{question.content}}</v-ons-list-header>
                <v-ons-list-item modifier="longdivider" v-for="(option, index) in question.options" :key="index">
                    <label class="center" :for="`radio-${material.id}-${question.id}-${index}`">{{option.key}}. {{option.value}}</label>
                    <label class="right">
                        <v-ons-radio :input-id="`radio-${material.id}-${question.id}-${index}`"
                            v-model="question.answer_key" :value="option.key"></v-ons-radio>
                    </label>
                </v-ons-list-item>
            </v-ons-list>
        </div>
        <div class="ext">
            <v-ons-card>
                <div class="title">拓展学习: {{material.extra.name}}</div>
                <div class="card">{{material.extra.content}}</div>
            </v-ons-card>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MaterialItem',
    props: ['material']
}
</script>