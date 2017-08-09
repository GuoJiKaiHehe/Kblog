<template>
	<div class="home">
		<k-header></k-header>
		<div class="container">
			<div class="left-main-wrap fl">
				<left-main></left-main>
			</div>
			
			<div class="right-sider-wrap fl">
				<right-sider></right-sider>
			</div>

		</div>
	</div>

</template>


<script type="text/javascript">
import kHeader from '@/components/header.vue';

import leftMain from './leftMain.vue';

import rightSider from './rightSider.vue';

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
			display: flex;	
		}



		.left-main-wrap{
			width:690px;
			flex:1;
			margin-right:20px;
		}
		.right-sider-wrap{
			width:290px;
			flex:0 0 290px;
			// float:right;
			
			
		}
	}
	.container{
		position:relative;
		top:50px;
		padding-top:20px;

	}
</style>