<template>
    <v-ons-page>
        <div>
            <router-link :to="'/volume/' + volume.id" v-for="volume in volumes" :key="volume.id">
                <volume-item :volume="volume"/>
            </router-link>
        </div>
	</v-ons-page>
</template>

<script>
import { http } from "../api/config"
import VolumeItem from '../components/VolumeItem.vue' 

export default {
    name: 'Season',
    components: {VolumeItem},
    data() {
        return {
            volumes: []
        }
    },
    mounted() {
        this.fetchData()
        console.log(this.$route)
        console.log(this.$route.params.id)
    },
    methods: {
        fetchData() {
            http.get("/fake/FakeVolumes.json").then(resp => {
                this.volumes = resp.data.data
            })
        }
    }
}
</script>
