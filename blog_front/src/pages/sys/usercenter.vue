<template>
	<div class="usercenter">
		<headTab :tabData="tabData" :nowIndex="nowIndex" @changeIndex="setIndex"></headTab>
		<div class="content">
			
			<ul>
				<li v-if="nowIndex==0" v-for="(item,key) in pushBowens">{{item.title}}</li>
				<li v-if="nowIndex==0 && pushBowens.length==0" class="nothing-data">没有任何数据；</li>
				<li v-if="nowIndex==1" v-for="(item,key) in collectionBowens">{{item.title}}</li>
				<li v-if="nowIndex==1 && collectionBowens.length==0" class="nothing-data">没有任何数据；</li>
			</ul>
		</div>
	
	</div>	
</template>


<script type="text/javascript">
import kHeader from '@/components/header.vue';
import headTab from './common/headTab.vue';
export default{
	name:"usercenter",
	components:{
		kHeader,
		headTab
	},
	data(){
		var _this=this;
		return{
			nowIndex:0,
			pushBowens:[
				{title:"1111111111"}
			],
			collectionBowens:[
				{title:"2222222222222222"}
			],
		}
	},
	methods:{
		setIndex(i){
			this.nowIndex=i;
		}
	},
	computed:{
		tabData(){
			return [
				{
					text:"我发布的博文（<span class='num'>"+this.pushBowens.length+"</span>）"
					
				},
				{
					text:"我收藏的博文（<span class='num'>"+this.collectionBowens.length+"</span>）"
					
				}
			]
		}
	}
}

</script>


<style type="text/css" lang="less">

	.usercenter{
		.content{
			padding-top:20px;
		}
		
	}
</style>