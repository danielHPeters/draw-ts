/**
 * Color class holding hex value of color.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Color {
  static getPredefinedColor (colorName: string): Color {
    if (colorName === 'RED') {
      return new Color('#FF0000')
    } else if (colorName === 'GREEN') {
      return new Color('#00FF00')
    } else if (colorName === 'BLUE') {
      return new Color('#0000FF')
    } else if (colorName === 'YELLOW') {
      return new Color('#FFFF00')
    } else {
      return new Color('#000000')
    }
  }

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
