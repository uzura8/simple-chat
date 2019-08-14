export default {
  isEmpty: (data) => {
    if (data === null) return true;
    if (data === undefined) return true;
    if (data === false) return true;
    if (data === '') return true;
    if (data === '0') return true;
    if (data === 0) return true;
    if (typeof data === 'object') {
      if (Array.isArray(data)) return data.length === 0;
      if (Object.keys(data).length > 0) return false;
      if (
        typeof Object.getOwnPropertySymbols !== 'undefined' &&
        Object.getOwnPropertySymbols(data).length > 0
      )
        return false;
      if (data.valueOf().length !== undefined)
        return data.valueOf().length === 0;
      if (typeof data.valueOf() !== 'object') return this.isEmpty(data.valueOf());
    }
    return false;
  },

  inArray: (value, array) => {
    return [].indexOf.call(array, value) > -1;
  },

  substr: (text, len, truncation='') => {
    const text_array = text.split('')
    let count = 0
    let str = ''
    for (let i = 0, m = text_array.length; i < m; i++) {
      let n = escape(text_array[i])
      if (n.length < 4) {
        count++
      } else {
        count += 2;
      }
      if (count > len) {
        return str + truncation
      }
      str += text.charAt(i)
    }
    return text
  },
}
