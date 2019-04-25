<template>
	<v-ons-page>
		<div class="banner">
			大学习
		</div>
		<br>
		<router-link to="/season" v-for="season in seasons" :key="season.id">
			<season-item :season="season"></season-item>
		</router-link>
	</v-ons-page>
</template>

<script>
import SeasonItem from '../components/SeasonItem.vue' 

export default {
	name: 'home',
	components: { SeasonItem },
	data() {
		return {
			seasons: [
				{
					id: 1,
					title: '第一季',
					content: '第一季说明第一季说明'
				}, {
					id: 2,
					title: '第二季',
					content: '第二季说明第二季说明'
				}, {
					id: 3,
					title: '第三季',
					content: '第三季说明第三季说明'
				}
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