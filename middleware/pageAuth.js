export default ({ app }) => {
  // Every time the route changes (fired on initialization too)
  app.router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const currentUser = firebase.auth().currentUser
    console.log("test")

    if (requiresAuth && !currentUser) {
      next('/login')
    } else if (requiresAuth && currentUser) {
      next()
    } else {
      next()
    }
  })
}
