import { v4 as uuidv4 } from 'uuid'

export default class Snackbar {
  id = null
  text = ''
  type = 'info'
  constructor ({ type, text }) {
    this.id = uuidv4()
    this.type = type
    this.text = text
  }
}
