import Shape from './Shape'
import Point from '../lib/math/Point'
import Color from '../lib/util/Color'

/**
 * Circle shape to be drawn on a canvas.
 *
 * @author Daniel Peters <daniel.peters.ch@gmail.com>
 * @version 1.0
 */
export default class Circle implements Shape {
  /**
   * Default constructor.
   *
   * @param start Starting point of this shape
   * @param end Ending point of this shape
   * @param color The color of this shape
   * @param fill Flag determining whether this shape should be filled
   */
  constructor (public start: Point, public end: Point, public color: Color, public fill: boolean) {}

  /**
   * Draws the circle on a canvas.
   *
   * @param context Canvas rendering context
   */
  render (context: CanvasRenderingContext2D): void {
    const radius = Math.abs(this.end.x - this.start.x)
    if (radius !== 0) {
      context.beginPath()
      context.strokeStyle = this.color.value
      context.arc(this.start.x, this.start.y, radius, 0, Math.PI * 2, true)
      if (this.fill) {
        context.fillStyle = this.color.value
        context.fill()
      } else {
        context.stroke()
      }
    }
  }
}
