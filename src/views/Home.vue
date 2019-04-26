<template>
	<v-ons-page>
		<div class="banner">
			大学习
		</div>
		<br>
		<div>
			<router-link to="/season" v-for="season in seasons" :key="season.id">
				<season-item :season="season"/>
			</router-link>
		</div>
	</v-ons-page>
</template>

<script>
import { http } from "../api/config"
import SeasonItem from '../components/SeasonItem.vue' 

export default {
	name: 'home',
	components: { SeasonItem },
	data() {
		return {
			seasons: []
		}
	},
	mounted() {
		this.fetchData()
	},
	methods: {
		fetchData() {
			http.get("/fake/FakeSeasons.json").then(resp => {
				this.seasons = resp.data.data
				console.log(this.seasons)
			})
		}
	}
}
</script>

<style>
.banner {
	font-size: 1.5rem;
	color: #fff;
	height: 10rem;
	line-height: 10rem;
	background-image: linear-gradient( 135deg, #5EFCE8 10%, #736EFE 100%);
	box-shadow:0px 0px 51px 0px rgba(0, 0, 0, 0.08), 0px 6px 18px 0px rgba(0, 0, 0, 0.05);
}
</style>