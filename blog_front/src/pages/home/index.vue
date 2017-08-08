<template>
	<div class="home">
		<k-header></k-header>
		<div class="container">
			<left-main></left-main>
			<right-sider></right-sider>
		</div>
	</div>

</template>


<script type="text/javascript">
import kHeader from '@/components/header.vue';

import leftMain from '@/components/leftMain.vue';

import rightSider from '@/components/rightSider.vue';
export default{
	name:"home",
	components:{
		kHeader,
		leftMain,
		rightSider
	},
	data(){
		return{

		}
	},
	methods:{
		
	}
}

</script>


<style type="text/css" lang="less">
	.home{
		position: relative;
		width:100%;
		.container{
			width:1000px;
			margin:0 auto;
		}
	}
</style>