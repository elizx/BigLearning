<template>
    <v-ons-page>
		<router-link to="/volume" v-for="volume in volumes" :key="volume.id">
            <volume-item :volume="volume"></volume-item>
		</router-link>
	</v-ons-page>
</template>

<script>
import VolumeItem from '../components/VolumeItem.vue' 
export default {
    name: 'Season',
    components: {VolumeItem},
    data() {
        return {
            volumes: [
               {
                   id: 1,
                   name: '第一期',
                   content: ''
               }, {
                   id: 2,
                   name: '第二期',
                   content: ''
               }, {
                   id: 3,
                   name: '第三期',
                   content: ''
               }
            ]
        }
    }
}
</script>
