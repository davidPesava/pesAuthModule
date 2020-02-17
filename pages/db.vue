<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <h1 v-if="currentUser">{{ currentUser.uid }}</h1>
  </v-layout>
</template>

<script>
    export default {
        middleware: 'router-auth',
        created: function () {
            this.currentUser = this.$store.state.users.currentUser
        },
        data() {
            return {
                currentUser: '',
            }
        },
    }
</script>
