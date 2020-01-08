const fileUtil = {
  /**
   * 获取文件名后缀
   * @param filename
   * @returns {*}
   */
  getSuffix (filename) {
    if (filename) {
      const lastIndex = filename.lastIndexOf('.')
      return filename.substring(lastIndex + 1)
    }
    return ''
  },
  // 通过base64创建图片
  createBase64Img(type, str) {
    return `data:image/${type};base64,${str}`
  },
  // 下载文件流
  downloadBlob(data, name, type) {
    const blob = new Blob([data])
    const downloadElement = document.createElement('a')
    const href = window.URL.createObjectURL(blob) // 创建下载的链接
    downloadElement.href = href
    downloadElement.download = `${name}.${type}` // 下载后文件名
    document.body.appendChild(downloadElement)
    downloadElement.click() // 点击下载
    document.body.removeChild(downloadElement) // 下载完成移除元素
    window.URL.revokeObjectURL(href) // 释放掉blob对象
  },
  // 创建上传的FormData
  createUploadFormData(target) {
    target = target || {}
    const formData = new FormData()
    // 向 formData 对象中添加文件
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        formData.append(key, target[key])
      }
    }
    return formData
  }
}

export default fileUtil
