export default function({ store, redirect, route }) {
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


