const errorList = new Map([
  ['required', 'Поле является обязательным'],
  ['url', 'Некорректный адрес']
])

export default (type) => {
  return errorList.get(type)
}
