import { ref, watch } from 'vue'

export function useStorage(key, value = null) {
  const storedValue = read()

  if (storedValue) {
    value = ref(storedValue)
  } else {
    value = ref(value)

    write()
  }

  watch(value, write, { deep: true })

  function read() {
    return JSON.parse(localStorage.getItem(key))
  }

  function write() {
    if (value.value === '' || value.value === null) {
      localStorage.removeItem(key)
    } else {
      localStorage.setItem(key, JSON.stringify(value.value))
    }
  }

  return value
}
