<template>
	<dl>
		<dt><el-input placeholder="搜索用户"
					  icon="search"
					  v-model="search_text"
					  :on-icon-click="handleSearch">
			</el-input>
		</dt>
		<dd>guojikai</dd>
		<dd>admin</dd>
	</dl>
</template>


<style type="text/css" lang="less" scoped>
	dl{
		box-sizing:border-box;
		padding:0 10px;
		dt{
			margin: 15px 0;
		}
		dd{
			text-align: left;
			height:33px;
			line-height: 33px;
			cursor: pointer;
			border-bottom: 1px solid #ccc;
		}
	}
</style>

<script type="text/javascript">
	export default{
		name:"user-list",
		data(){
			return {
				search_text:''
			}
		},
		methods:{
			handleSearch(){

			}
		}
	}
</script>