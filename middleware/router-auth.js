export default function({ app,store, redirect, route }) {
    const cookieRes = app.$cookies.get('current-user-investKeep')
    if(cookieRes) {
        store.commit('users/setCurrentUser', cookieRes) 
    }
    if (route.matched.some(record => record.path == '/db') && store.state.users.currentUser == null) {
      redirect("/")
    }
  // store.state.user != null && route.name == 'login' ? redirect('/admin') : ''
  // store.state.user == null && isAdminRoute(route) ? redirect('/') : ''
  //
  //
  // function isAdminRoute(route) {
  //   if (route.matched.some(record => record.path == '/db')) {
  //     return true
  //   }
  // }
}


