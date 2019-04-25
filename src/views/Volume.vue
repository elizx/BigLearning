<template>
    <v-ons-page>
        <el-steps simple :active="active_step">
            <el-step :title="material.name" v-for="(material, index) in materials" :key="index"></el-step>
            <el-step title="完成" :key="materials.length"></el-step>
        </el-steps>
        <material-item :material="materials[0]"></material-item>
        <section class="bottom-btns">
            <v-ons-button v-if="active_step > 1">返回</v-ons-button>
            <v-ons-button v-if="active_step < materials.length">继续</v-ons-button>
        </section>
    </v-ons-page>
</template>

<script>
import { http } from "../api/config";
import MaterialItem from '../components/MaterialItem'

export default {
    name: 'Volume',
    components: {MaterialItem},
    data() {
        return {
            active_step: 1,
            materials: []
        }
    },
    mounted() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            http.get("/fake/FakeMaterials.json").then(resp => {
                this.materials = resp.data.data
            })
        }
    }
}
</script>

<style scoped>
.bottom-btns {
    display: flex;
    justify-content: space-around;
    padding: 1rem 3rem;
}
.bottom-btns .button {
    font-size: 0.8rem;
}
</style>
