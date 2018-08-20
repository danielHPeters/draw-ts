import Point from '../lib/math/Point'
import Color from '../lib/util/Color'

/**
 * Interface for drawing shapes.
 *
 * @author Daniel Peters <daniel.peters.ch@gmail.com>
 * @version 1.0
 */
export default interface Shape {
  start: Point
  end: Point
  color: Color
  fill: boolean

  /**
   * Draws the shape onto the canvas.
   *
   * @param context Canvas rendering context
   */
  render (context: CanvasRenderingContext2D): void
}
