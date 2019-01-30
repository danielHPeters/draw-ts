/**
 * Color class holding hex value of color.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Color {
  static readonly RED = new Color('#FF0000')
  static readonly GREEN = new Color('#00FF00')
  static readonly BLUE = new Color('#0000FF')
  static readonly YELLOW = new Color('#FFFF00')
  static readonly BLACK = new Color('#000000')
  /**
   * Regex for verifying hex-color formats.
   * Valid formats are: #000 or #000000.
   */
  static readonly VALID_COLOR: string = '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$'

  value: string

  constructor (value: string) {
    this.value = value
  }

  static validate (value: string): boolean {
    return new RegExp(Color.VALID_COLOR).test(value)
  }
}
