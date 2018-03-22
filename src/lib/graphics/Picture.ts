/**
 * Picture class.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Picture {
  loaded: boolean
  src: string
  img: HTMLImageElement

  /**
   * Constructor.
   *
   * @param {string} src Image source url.
   */
  constructor (src: string) {
    this.loaded = false
    this.img = new Image()
    this.img.addEventListener('load', () => this.loaded = true)
    this.src = src
    this.img.src = src
  }
}
