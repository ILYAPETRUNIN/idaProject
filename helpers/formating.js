export function formatPrice (number) {
  const num = Number(number)
  return new Intl.NumberFormat('ru-RU').format(num)
}

export function priceToNumber (price) {
  return price.replace(/\s/g, '')
}
