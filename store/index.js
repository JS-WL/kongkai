import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { _sign } from '../apis/index.js'
export default new Vuex.Store({
	state: {
		position: {}
	},
	mutations: {
		m_getCity() {}
	},
	actions: {
		a_getCity({state, commit}) {
			console.log('ok')
			uni.authorize({
			    scope: 'scope.userLocation',
			    success() {
					_sign().then((res) => {
						console.log(res)
					}).catch(err => {
						console.log(err)
					})
			       uni.getLocation({
			           type: 'gcj02',
			           success: function (res) {
			           },
					   fail: function(err) {
						   console.log(err)
					   }
			       });
			    },
				fail: function(err) {
					console.log(err)
				}
			})
		}
	},
	getters: {
		
	}
})