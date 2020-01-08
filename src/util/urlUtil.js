export default {
  getQueryStringArgs (key) {
  // get query string without the initial ?
    let qs = (location.search.length > 0 ? location.search.substring(1) : '')
    // object to hold data
    let args = {}
    // get individual items
    let items = qs.length ? qs.split('&') : []
    // used in for loop
    // assign each item onto the args object
    for (let i = 0; i < items.length; i++) {
      let item = items[i].split('=')
      let name = decodeURIComponent(item[0])
      let value = decodeURIComponent(item[1])
      if (name.length) {
        args[name] = value
      }
    }
    if (key) {
      return args[key]
    } else {
      return args
    }
  },
  setQueryStringArgs (url, args) {
    var key, name, value
    if (typeof args !== 'object') {
      return false
    }
    url += (url.indexOf('?') === -1 ? '?' : '&')
    for (key in args) {
      name = encodeURIComponent(key)
      value = encodeURIComponent(args[key])
      url += name + '=' + value + '&'
    }
    url = url.substring(0, url.length - 1)
    return url
  }
}
