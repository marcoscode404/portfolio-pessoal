export default function (obj1: { [key: string]: any }, obj2: { [key: string]: any }) {
  
  if (Object.keys(obj1).length == 0 && Object.keys(obj2).length > 0) return false
  for (let [key, value] of Object.entries(obj1)) {
    if (obj2[key] != value) {
      return false
    }
  }

  return true
}
