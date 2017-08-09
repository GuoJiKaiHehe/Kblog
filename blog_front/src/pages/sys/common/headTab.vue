<template>
	<ul class="head-tab">
		<li v-for="(item,k) in tabData"  @click="changeContent(k)" :class="{'active':nowIndex==k}" v-html="item.text"></li>
			
	</ul>
</template>

<script type="text/javascript">
	export default{
		name:"head-tab",
		props:{
			tabData:{
				type:Array
			},
			nowIndex:{
				type:Number
			}
		},
		data(){
			return {
				
			}
		},
		methods:{
			changeContent(k){
				console.log(this.nowIndex)
				// this.nowIndex=k;
				this.$emit("changeIndex",k);
				// this.$emit("changeParentCon")
			}
		}
	}
</script>
<style type="text/css" lang="less" scoped>
@import url('../../../less/var.less');
	.head-tab{
			height:40px;
			line-height: 40px;
			border-bottom: 1px solid #ccc;
			li{
				display: inline-block;
				text-align: center;
				transition:all 0.2s;
				margin:0 10px;
				&:first-child{
					margin-left:0;
				}
				margin-left:20px;
				cursor: pointer;
			
				&.active{
					position: relative;
					color:@lanse;
					&:after{
						content:" ";
						display: block;
						position: absolute;
						bottom: -1px;
						height:2px;
						width:100%;
						background: @lanse;
					}
				}
			}
		}
</style>