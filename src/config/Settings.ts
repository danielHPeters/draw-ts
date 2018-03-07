import { ShapeType } from '../factory/ShapeFactory'
import Shape, { Color } from '../interfaces/Shape'

/**
 * Default application settings configuration.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Settings {
  activeColor
  activeTool: ShapeType
  menuHeight: number
  history: Shape[]
  fill: boolean

  /**
   * Default constructor.
   *
   * @param {number} menuHeight Height of the top menu to calculate the drawing offset
   * @param {Color} activeColor Currently used color for drawing
   * @param {ShapeType} activeTool Currently active shape
   */
  constructor (menuHeight: number, activeColor = Color.BLACK, activeTool = ShapeType.LINE) {
    this.activeColor = activeColor
    this.menuHeight = menuHeight
    this.activeTool = activeTool
    this.history = []
    this.fill = false
  }
}
