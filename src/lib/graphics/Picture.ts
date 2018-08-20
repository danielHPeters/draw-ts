/**
 * Picture class.
 *
 * @author Daniel Peters <daniel.peters.ch@gmail.com>
 * @version 1.0
 */
export default class Picture {
  loaded: boolean
  src: string
  img: HTMLImageElement

  /**
   * Constructor.
   *
   * @param src Image source url.
   */
  constructor (src: string) {
    this.loaded = false
    this.img = new Image()
    this.img.addEventListener('load', () => this.loaded = true)
    this.src = src
    this.img.src = src
  }
}
