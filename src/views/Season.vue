<template>
    <v-ons-page>
		<router-link to="/volume">
			<v-ons-card v-for="volume in volumes" :key="volume.id">
				<div class="title">第{{volume.id}}期</div>
				<div class="content">
					this is first volume
				</div>
			</v-ons-card>
		</router-link>
	</v-ons-page>
</template>

<script>
import VolumeItem from '../components/season/VolumeItem.vue' 
export default {
    name: 'Season',
    components: {VolumeItem},
    data() {
        return {
            volumes: [
                {id: 1, val: 'a'},
                {id: 2, val: 'b'}
            ]
        }
    }
}
</script>
