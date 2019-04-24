<template>
	<v-ons-page>
		<div class="banner">
			大学习
		</div>
		<br>
		<router-link to="/season">
			<v-ons-card v-for="season in seasons" :key="season.id">
				<div class="title">第{{season.id}}期</div>
				<div class="content">
					this is first volume
				</div>
			</v-ons-card>
		</router-link>
	</v-ons-page>
</template>

<script>
import SeasonItem from '../components/home/SeasonItem.vue' 

export default {
	name: 'home',
	components: { SeasonItem },
	data() {
		return {
			seasons: [
				{id: 1, val: 'a'},
				{id: 2, val: 'b'}
			]
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