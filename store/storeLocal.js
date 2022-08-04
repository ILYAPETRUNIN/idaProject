import storage from 'store2'

// ключ для кеширования данных
const WEB_NAME = 'WEB_NAME'

export function getLocalStorage () {
  return storage.get(WEB_NAME)
}

export function setLocalStorage (data) {
  return storage.set(WEB_NAME, data)
}
