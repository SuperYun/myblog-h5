export default function ({ app: { router, store }, route, redirect}) {
	router.beforeEach((to, from, next) => {
		if (/\/news\/\d+\.html$/.test(to.path) && process.server) {
			next(to.path.slice(0, -5))
		} else if (/\/news\/\d+$/.test(to.path) && process.server) {
			redirect([301], to.path + '.html')
			next()
		} else {
			next()
		}
	})
}