<template>
  <v-row justify="center">
    <v-col cols="12" sm="8" md="6">
      <v-banner single-line>Code Editor</v-banner>
      <codemirror
        ref="cmEditor"
        :value="code"
        :options="cmOptions"
        @ready="onCmReady"
        @focus="onCmFocus"
        @input="onCmCodeChange"
      />
      <v-btn @click="onRunButtonClick" tile outlined color="success">RUN</v-btn>
      <pre>{{result}}</pre>
    </v-col>
  </v-row>
</template>

<script>
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/python/python.js'

import 'codemirror/theme/eclipse.css'
import 'codemirror/lib/codemirror.css'

import { EvaluatePython } from '@/api/judger'

export default {
  name: 'Playground',

  data () {
    return {
      code: '',
      result: '',
      cmOptions: {
        tabSize: 2,
        mode: 'python',
        theme: 'eclipse',
        lineNumbers: true,
        line: true
      }
    }
  },

  methods: {
    onRunButtonClick () {
      console.log('run button clicked, current code is', this.code)
      EvaluatePython(this.code).then(result => {
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
      this.code = code
    }
  },
  components: {}
}
</script>
