<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-banner single-line>Playground</v-banner>
        <codemirror
          ref="cmEditor"
          :value="code"
          :options="cmOptions"
          @ready="onCmReady"
          @focus="onCmFocus"
          @input="onCmCodeChange"
        />
        <v-btn @click="onRunButtonClick" tile outlined color="success"
          >RUN</v-btn
        >
        <v-card v-if="hasResult" class="mx-auto">
          <v-card-text>
            <v-alert v-if="isEditorDirty" border="left" colored-border type="info" elevation="2">
              Code changed since last run, output may be stale.
            </v-alert>
            <v-alert v-else border="left" colored-border type="success" elevation="2">
              Code execution output
            </v-alert>
            <pre>{{ result }}</pre>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/python/python.js'

import 'codemirror/theme/eclipse.css'
import 'codemirror/lib/codemirror.css'

import { EvaluatePython } from '@/api/judger'
import { mapState } from 'vuex'

export default {
  name: 'Playground',
  data () {
    return {
      pid: null, // problem ID
      code: '', // https://vuejs.org/v2/guide/components-props.html#One-Way-Data-Flow
      hasResult: false,
      isEditorDirty: false,
      executedCode: null,
      result: '',
      cmOptions: {
        tabSize: 2,
        mode: 'python',
        theme: 'eclipse',
        lineNumbers: true,
        lineWrapping: true,
        line: true
      }
    }
  },

  methods: {
    onRunButtonClick () {
      console.log('run button clicked, current code is', this.code)
      EvaluatePython(this.code).then((result) => {
        this.hasResult = true
        this.isEditorDirty = false
        this.executedCode = this.code
        console.log('evaluation result: ', result)
        this.result = result.run.output
      })
    },
    onCmReady (cm) {
      console.log('cm editor ready', cm)
    },
    onCmFocus (cm) {
      console.log('cm editor got focused', cm)
    },
    onCmCodeChange (code) {
      console.log('code changed ', code)
      this.isEditorDirty = code !== this.executedCode
      this.code = code
    }
  },

  computed: {
    ...mapState(['currentProblem'])
  },

  created () {
    this.pid = parseInt(this.$route.params.pid)
    this.$store.dispatch('fetchProblemByPid', this.pid).then(() => {
      this.code = `"""\n${this.currentProblem.description}\n"""`
    })
  }
}
</script>
