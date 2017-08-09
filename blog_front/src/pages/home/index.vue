<template>
	<div class="home">
		<k-header></k-header>
		<div class="container">
<<<<<<< HEAD
			<left-main></left-main>
			<right-sider></right-sider>
=======
<<<<<<< HEAD
			<left-main></left-main>
			<right-sider></right-sider>
=======
			<div class="left-main-wrap fl">
				<left-main></left-main>
			</div>
			
			<div class="right-sider-wrap fl">
				<right-sider></right-sider>
			</div>
>>>>>>> usera
>>>>>>> front_vue
		</div>
	</div>

</template>


<script type="text/javascript">
import kHeader from '@/components/header.vue';

<<<<<<< HEAD
import leftMain from '@/components/leftMain.vue';

import rightSider from '@/components/rightSider.vue';
=======
<<<<<<< HEAD
import leftMain from '@/components/leftMain.vue';

import rightSider from '@/components/rightSider.vue';
=======
import leftMain from './leftMain.vue';

import rightSider from './rightSider.vue';
>>>>>>> usera
>>>>>>> front_vue
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
		.left-main-wrap{
			width:690px;

		}
		.right-sider-wrap{
			width:290px;
			float:right;
			
			
		}
	}
	.container{
		position:relative;
		top:50px;
		padding-top:20px;
>>>>>>> usera
>>>>>>> front_vue
	}
</style>