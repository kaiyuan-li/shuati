import axios from 'axios'

const EvaluatePython = async (code) => {
  const req = {
    language: 'python3',
    version: '3.9.4',
    files: [
      {
        name: 'my_cool_code.js',
        content: code
      }
    ],
    stdin: '',
    compile_timeout: 10000,
    run_timeout: 3000,
    compile_memory_limit: -1,
    run_memory_limit: -1
  }
  try {
    const response = await (axios.post('https://emkc.org/api/v2/piston/execute', req))
    console.log(response.data)
    return response.data
  } catch (err) {
    console.error('evaluation error', err)
  }
}

export { EvaluatePython }
