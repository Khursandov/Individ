import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import db from './settings'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '',
    secondName: '',
    password: '',
    tests: [],
    students: [],
    error: true,
    testPassword: '',
    topics: [],
    currentDatas: '',
    admin: false,
    currentTopic: '',
    correctAns: 0,
    adminResults: []
  },
  getters: {
    User({state}) {
      return this.state.user
    },
  },
  mutations: {
    setStudents({state}, payload) {
      this.state.students.push(payload);
    },
    setError({state}, payload) {
      this.state.error = payload
    },
    setUser(state, payload) {
      this.state.name = payload.name
      this.state.secondName = payload.secondName
      this.state.password = payload.password
    },
    setPassword({state}, payload) {
      this.state.testPassword = payload.password
    },
    setTopics({state}, payload) {
      this.state.topics.push(payload)
    },
    setCurrentDatas({state}, payload) {
      this.state.currentDatas = payload
    },
    setTests({state}, payload) {
      this.state.tests.push(payload)
    },
    setAdmin({state}, payload) {
      this.state.admin = payload
    },
    setCorrectAns({state}, payload) {
      this.state.correctAns = payload
    },
    setAdminResults({state}, payload) {
      this.state.adminResults.push(payload)
    }
  },
  actions: {
    getStudents({state, commit}) {
      db.collection('students').get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            'name': doc.data().name,
            'secondName': doc.data().secondName,
            'password': doc.data().password
          }
          commit('setStudents',data )
        })
      })
    },
    newUser({state, commit}, payload) {
      console.log(payload)
      db.collection('students').add({
        name: payload.name,
        secondName: payload.secondName,
        password: payload.password
      }).then( res => {
        const data = {
          'name': payload.name,
          'secondName': payload.secondName,
          'password': payload.password
        }
        commit('setUser', data)
        router.push('/')
        console.log(this.state.user)
      }).catch(err => {
        console.log('newUser Error', err)
      })
    },
    signIn({state,commit}, payload) {
      if(payload.name === 'admin' && payload.password === '123456') {
        commit('setAdmin', true)
        commit('setUser', payload)
        router.push('/')
      } else {
        db.collection('students').where('name', '==', payload.name ).get().then( querySnapshot => {
          querySnapshot.forEach(doc => {
            if( payload.password === doc.data().password ) {
              commit('setError', false)
              commit('setUser', doc.data())
              router.push('/')
            }
          })
        }).catch(err => {
          commit('setError', false)
          console.log('Sign In', err)
        })
      }
    },
    createPassword({commit}, payload) {
      db.collection('passwordTest').add({
        password: payload.password,
        currentTopic: payload.currentTopic
      }).then(res => {
        commit('setPassword', payload)
        console.log(res)
      }).catch(err => {
        console.log('creating password', err)
      })
    },
    deletePassword({commit}, payload) {
      db.collection('passwordTest').where('password', '==', payload).get().then( querySnapshot => {
        querySnapshot.forEach( doc => {
          doc.ref.delete()
        })
      })
    },
    getTopics({commit}) {
      db.collection('topics').get().then( querySnapshot => {
        querySnapshot.forEach( doc => {
          const data = {
            'topicId': doc.data().topicId,
            'text': doc.data().topicName
          }
          commit('setTopics', data)
        })
      })
    },
    // getCurrentTopic({commit}) {
    //   db.collection('passwordTest').get().then( querySnapshot => {
    //     console.log(querySnapshot)
    //   })
    // },
    getPassword({commit}) {
      db.collection('passwordTest').get().then( querySnapshot => {
        querySnapshot.forEach( doc => {
          let data = {
            'password': doc.data().password,
            'current': doc.data().currentTopic
          }
          // console.log(data)
          commit('setCurrentDatas', data)
        })
      })
    },
    getTests({commit}) {
      db.collection('tests').get().then( querySnapshot => {
        querySnapshot.forEach( doc => {
          let test = {
            'id': doc.id,
            'topicId': doc.data().topicId,
            'body': doc.data().body,
            'a': doc.data().a,
            'b': doc.data().b,
            'c': doc.data().c,
            'd': doc.data().d,
            'ans': doc.data().ans,
          }
          commit('setTests', test)
        })
      })
    },
    storeResult({commit}, payload) {
      console.log('sssssssssssss')
      db.collection('results').add({
        name: payload.name,
        result: payload.result,
        topicId: payload.topicId
      }).then( res => {
        console.log(res)
        commit('setCorrectAns', payload.result)
      })
    },
    getResults({commit}) {
      db.collection('results').get().then( querySnapshot => {
        querySnapshot.forEach( doc => {
          let data = {
            'name': doc.data().name,
            'calories': doc.data().result,
          }
          commit('setAdminResults', data)
        })
      })
    }

  }
})
