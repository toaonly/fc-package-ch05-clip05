export function getKeys(obj) {
  return Object.keys(obj)
}

export function getValueByKey(obj, key) {
  return obj[key]
}

export function transformUppercaseKey(obj) {
  const upperCaseObj = {}

  Object.keys(obj).forEach(key => {
    upperCaseObj[key.toUpperCase()] = obj[key]
  })

  return upperCaseObj
}
