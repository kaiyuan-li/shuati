import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'

Vue.use(Vuex)

const state = {
  problems: [],
  currentProblem: null
}

const getItemsFromDocRef = docs => {
  const items = []
  docs.forEach(doc => {
    const item = doc.data()
    item.id = doc.id
    items.push(item)
  })
  return items
}

export default new Vuex.Store({
  state,
  mutations: {
    setProblems (state, val) {
      state.problems = val
    },

    setCurrentProblem (state, val) {
      state.currentProblem = val
    }
  },
  actions: {
    async fetchAllProblems ({ commit }) {
      console.log('fetching all problems')
      const docs = await fb.problemsCollection.get()
      const problems = getItemsFromDocRef(docs)
      console.log(`fetched all ${problems.length} problems: ${JSON.stringify(problems)}`)
      commit('setProblems', problems)
    },
    async fetchProblemByPid ({ commit, dispatch, getters }, pid) {
      const docs = await fb.problemsCollection.where('pid', '==', pid).get()
      const fetchedProblems = getItemsFromDocRef(docs)
      if (fetchedProblems.length) {
        commit('setCurrentProblem', fetchedProblems[0])
      } else {
        console.error(`error fetching problem with pid ${pid}`)
      }
    },
    async fetchCurrentProblemById ({ commit }, id) {
      const problem = await fb.problemsCollection.doc(id).get()
      const currentProblem = problem.data()
      currentProblem.id = id
      commit('setCurrentProblem', currentProblem)
    }
  },
  getters: {
    getProblems (state) {
      return state.problems
    }
  },
  modules: {
  }
})
