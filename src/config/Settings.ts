import { ShapeType } from '../factory/ShapeFactory'
import Shape from '../geometry/Shape'
import Color from '../lib/util/Color'

/**
 * Default application settings configuration.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Settings {
  activeColor: Color
  activeTool: ShapeType
  menuHeight: number
  history: Shape[]
  fill: boolean

  /**
   * Default constructor.
   *
   * @param menuHeight Height of the top menu to calculate the drawing offset
   * @param activeColor Currently used color for drawing
   * @param activeTool Currently active shape
   */
  constructor (menuHeight: number, activeColor: Color = Color.BLACK, activeTool: ShapeType = ShapeType.LINE) {
    this.activeColor = activeColor
    this.menuHeight = menuHeight
    this.activeTool = activeTool
    this.history = []
    this.fill = false
  }
}
