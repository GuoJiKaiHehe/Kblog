<template>
	<div class="login-reg">
		<div class="login-container">
			<div class="logo">
				<img src="/static/images/logo_blue.png" alt="logo">
				<div class="text">记录你的故事与生活</div>
			</div>
			<ul class="tab-nav">
				<li  v-for="(item,key) in tabbtns "><a href="javascript:;"  @click="changeTab(key)" :class="{'active':key==index}">{{item}}</a></li>
				
			</ul>

			<transition :name="transitionName">
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</transition>
		</div>
	</div>
</template>


<script type="text/javascript">
export default{
	data(){
		return {
			index:0,
			tabbtns:['登录','注册'],
			transitionName:'fade'
		}
	},
	methods:{
		changeTab(k){
			if(this.index==k){
				return;
			}
			this.index=k;
			console.log(this.$route)
			this.$router.push(this.index==0?{path:'/loginindex'}:{path:'/loginindex/reg'})
		}
	}
}

</script>


<style type="text/css" lang="less" scoped>
.input-line{
		margin:20px;
}
.login-reg{
	*{
		transition:all 0.2s ease-out;
	}
	width: 100%;
	height:100%;
	position: relative;
	.login-container{
		width:300px;
		margin:0 auto;
		position: absolute;
		top:50px;
		left:0;
		right:0;
		.logo {
			img{
				
			}
			.text{
				font-size: 15px;
			}
		}
		.tab-nav{
			display: flex;
			text-align: center;
			margin:0;
			padding:0;
			margin-top:20px;
			
			li{
				flex:1;
				a{
					display: block;
					font-size: 14px;
					color:#666;
					&.active{
						color:#333;
					}
				}
			}
		}
		
	}
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}


.slide-left-enter-active{
	transform:translateX(-300px);
}
.slide-left-enter-active, .slide-left-leave-active {
  transition: opacity .5s
}
.slide-left-enter, .slide-left-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
.slide-left-leave-to{
	transform:translateX(300px);
}
.slide-right-enter-active{
	transform:translateX(-300px);
}
.slide-right-enter-active, .slide-right-leave-active {
  transition: opacity .5s
}
.slide-right-enter, .slide-right-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
// .list-enter-active; .list-leave-active; .list-enter ,.list-leave-to; .list-move;
</style>














