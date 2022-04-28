<template>
  <div>
    <button
      @click="goPreview"
    >
      预览 word 文件
    </button>
    <button
      @click="downLoad"
    >
      下载 word 文件
    </button>
    <div class="doc-render-box">
      <div ref="refFile"></div>
    </div>
  </div>
</template>

<script>

// 引入axios用来发请求
import {
  defineComponent,
  ref
} from 'vue'
import axios from 'axios'
const docx = require('docx-preview')

const service = axios.create({
  baseURL: '/api/getDoc',
  timeout: 6000
})

/**
 * 解析 filename
 */
function extractFileNameFromContentDispositionHeader (value) {
  const patterns = [
    /filename\*=[^']+'\w*'"([^"]+)";?/i,
    /filename\*=[^']+'\w*'([^;]+);?/i,
    /filename="([^;]*);?"/i,
    /filename=([^;]*);?/i
  ]

  let responseFilename
  patterns.some(regex => {
    responseFilename = regex.exec(value)
    return responseFilename !== null
  })
  if (responseFilename !== null && responseFilename.length > 1) {
    try {
      return decodeURIComponent(responseFilename[1])
    } catch (e) {
      console.error(e)
    }
  }

  return null
}

export default defineComponent({
  name: 'PreviewDemo',
  setup () {
    const refFile = ref(null)
    const message = ref('')
    console.log('使用插件的 renderAsync 方法来渲染', docx)

    // 预览
    const goPreview = async () => {
      const { data } = await service({
        method: 'get',
        responseType: 'blob'
      })
      docx.renderAsync(data, refFile.value)
    }

    // 下载
    const downLoad = async () => {
      const res = await service({
        method: 'get',
        responseType: 'blob'
      })
      const fileName = extractFileNameFromContentDispositionHeader(
        res.headers?.['content-disposition']
      )

      const blob = new Blob([res.data])
      const link = document.createElement('a')

      link.href = URL.createObjectURL(blob)
      link.download = fileName || 'word文件.docx'
      link.style.display = 'none'

      document.body.appendChild(link)

      link.click()
      link.remove()
    }

    return {
      message,
      refFile,
      goPreview,
      downLoad
    }
  }
})
</script>

<style lang="scss" scoped>
.doc-render-box {
  width: 900px;
  padding-top: 10px;
  margin: 0 auto;
  overflow-x: auto;
}
</style>
