import Vue from 'vue'

import Vuex from 'vuex'

import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex);
var state={
	user:{
		uid:1,
		nick:'guojikai',
		account:'978352'
	}
}
export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})
