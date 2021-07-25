<template>
  <v-card max-width='600' class='mx-auto'>
    <v-toolbar color='light-blue' dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Problems</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list three-line>
      <template v-for='(problem, index) in problems'>
        <v-divider :key='index'></v-divider>
        <v-list-item :key='problem.title'>
          <v-list-item-content>
            <v-list-item-title v-html="problem.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['problems'])
  },
  created () {
    this.$store.dispatch('fetchAllProblems')
  }
}
</script>
