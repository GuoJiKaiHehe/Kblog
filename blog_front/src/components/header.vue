<template>
	<div class="header">
		<div class="header-container clear">
			<div class="logo">
				<img src="/static/images/logo_blue.png" alt="logo">
			</div>
			<ul class="nav">
				<li v-for="(nav,k) in navs">
				<router-link :to="{path:nav.url}" :class="{'active':nav.url==$route.path}">{{nav.name}}</router-link>
				</li>
			</ul>
			<div class="search-box">
				<el-input placeholder="请输入搜索内容"
					  icon="search"
					  v-model="search_text"
					  :on-icon-click="handleSearch">
			</el-input>
			</div>
			
			<ul  v-if="isLogin" class="logined info" >
					
				<li class="username">{{userInfo.name}}</li>
				<li class="avatar"	>
					<img src="/static/images/avatar/default.jpg" @click.stop="showsubnav" width="33"  alt="avatar">
					<ul class="subnav" v-show="isShowSubNav">
						<li @click.stop="stopPropa"><router-link :to="{path:'/me'}" >个人主页</router-link></li>
						<li @click.stop="stopPropa"><i class="fa fa-cog fa-fw"></i><router-link :to="{path:'/sys'}">系统设置</router-link></li>
						<li @click.stop="stopPropa"><a href="javascript:;">退出</a></li>
					</ul>
				</li>
			</ul>
			<ul class="notlogin info" v-else >

				<li><a href="javascript:;">登录</a></li>
				<li><a href="javascript:;">注册</a></li>
			</ul>
			<ul class=" notlogin info">
				<li class="msg"><i class="fa fa-comments"></i></li>
				<li class="msg"><i class="fa fa-assistive-listening-systems"></i></li>
			</ul>
		</div>
	</div>

</template>

<script type="text/javascript">
	export default{
		name:"header",

		mounted(){
			var _this=this;
			document.onclick=function(e){
				e.stopPropagation();

				_this.isShowSubNav=false
			}
		},

		data(){
			return{
				isLogin:true,
				userInfo:{
					name:"guojikai"
				},
				isShowSubNav:false,
				search_text:'',
				// curNav:''
				navs:[
					{
						name:"首页",
						url:"/",
					},
					{
						name:"聊天室",
						url:"/chat",
					},
					{
						name:"游戏",
						url:"/game",
					},
					{
						name:"文章",
						url:"/article",
					}
				]
			}
		},
		methods:{
			handleSearch(){

			},
			showsubnav(e){
				console.log(this.isShowSubNav);

				this.isShowSubNav=!this.isShowSubNav;
			},
			stopPropa(e){
				console.log('333')
				e.stopPropagation();

			}
		}

	}
</script>


<style lang="less">
@import url('../less/var.less');
	.header{
		height:50px;
		border-bottom: 1px solid #ccc;
		position: fixed;
		top:0;
		width:100%;

		background-color: #fff;
		z-index: 99;

		.header-container{
			width:1000px;
			margin:0 auto;
			height:50px;
			padding-top:8px;
		}
		.logo{
			float:left;
			width:40px;
			
			img{
				width:100%;
			}
		}
		.nav{
			float:left;
			li{
				float:left;
				line-height: 33px;

				padding:0 10px;

				padding:0 10px;

				padding:0 20px;

				a{
					color:#666;
					display: block;
					font-size:15px;


					&.active{
						color:@lanse;

					}
					&hover{
						color:@lanse;
					}
				}
			}
		}
		.search-box{
			float:left;
			margin-left:20px;
		}
		.info{


			float:right;
			margin-left:20px;

			li{
				float:left;
				font-size: 22px;
				color:#666;
				padding:0 10px;
				img {
					border-radius: 10px;
					overflow: hidden;
					padding:0 20px;
					display: block;
					cursor: pointer;
				a{
					color:#666;
				}
				
				}
			}

			.avatar{
				position: relative;
				.subnav{
					position:absolute;
					background-color:#fff;
					border:1px solid #ccc;
					border-radius:8px;
					box-shadow: 2px 2px 15px #ccc;
					top:50px;
					width:100px;
					left:-25%;
					&:before{
						content: " ";
						display: block;
						position: absolute;
						height:0px;
						width:0px;
						border:10px solid #fff;
						border-left-color:transparent  ;
						border-right-color: transparent;
						border-top-color: transparent;
						top:-20px;
						left:50%;
						margin-left:-10px;
					}
					li{
						display: block;
						font-size:13px;
						padding:0;
						margin:0;
						line-height:2;
						float:none;
						height:30px;
					}
				}
			}

		}
	}

</style>