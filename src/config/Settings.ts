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
  /**
   * Default constructor.
   *
   * @param menuHeight Height of the top menu to calculate the drawing offset
   * @param activeColor Currently used color for drawing
   * @param activeTool Currently active shape
   * @param history Drawing history
   * @param fill Fill drawing flag
   */
  constructor (
    public menuHeight: number,
    public activeColor: Color = Color.getPredefinedColor('BLACK'),
    public activeTool: ShapeType = ShapeType.LINE,
    public history: Shape[] = [],
    public fill: boolean = false
  ) {}
}
