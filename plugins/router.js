export default function ({ app: { router, store }, route }) {
	router.beforeEach((to, from, next) => {
	  next()
	})
	router.afterEach((to, from) => {
		store.commit('handelRoute', to)
	  // baiduTongji()
	})
}

function baiduTongji() {
	const _script = document.getElementById('baidu-analysic')
	if (_script) _script.remove()
	const hm = document.createElement("script")
	const s = document.getElementsByTagName("script")[0]
	hm.src = "https://hm.baidu.com/hm.js?7fa20b65362f1b7a67ad61a3be1b330d"
	hm.defer = true
	hm.id = 'baidu-analysic'
	s.parentNode.insertBefore(hm, s)
}
