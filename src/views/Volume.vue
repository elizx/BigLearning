<template>
    <v-ons-page>
        <!-- step from 1 !!! -->
        <el-steps simple :active="active_step">
            <el-step :title="material.name" v-for="(material, index) in materials" :key="index"></el-step>
            <el-step title="完成" :key="materials.length"></el-step>
        </el-steps>
        <div>
            <material-item :material="material" v-show="index == active_step - 1" v-for="(material, index) in materials" :key="index"/>
            <v-ons-card v-show="showScore">
                <div class="title">得分：99</div>
            </v-ons-card>
        </div>
        <section class="bottom-btns">
            <v-ons-button v-if="active_step > 1 && active_step <= materials.length" @click="active_step--">返回</v-ons-button>
            <v-ons-button v-if="active_step < materials.length" @click="active_step++">继续</v-ons-button>
            <v-ons-button v-else-if="active_step == materials.length" @click="active_step++">提交</v-ons-button>
            <v-ons-button v-else @click="share">分享</v-ons-button>
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
            materials: [],
            showScore: false
        }
    },
    mounted() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            http.get("http://127.0.0.1:8080/fake/FakeMaterials.json").then(resp => {
                this.materials = resp.data.data
            })
        },
        share() {

        }
    },
    watch: {
        active_step(nv, ov) {
            if(nv == this.materials.length + 1) {
                this.showScore = true
            } else {
                this.showScore = false
            }
        }
    },
}
</script>

<style scoped>
.bottom-btns {
    display: flex;
    justify-content: space-around;
    padding: 1rem 2rem;
}
.bottom-btns .button {
    font-size: 0.8rem;
    width: 5rem;
}
</style>
