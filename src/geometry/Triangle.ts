import Shape from './Shape'
import Point from '../lib/math/Point'
import Color from '../lib/util/Color'

/**
 * Triangle shape to be drawn on a canvas object.
 *
 * @author Daniel Peters <daniel.peters.ch@gmail.com>
 * @version 1.0
 */
export default class Triangle implements Shape {
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
   * Draw the triangle onto the canvas.
   *
   * @param context Canvas rendering context
   */
  render (context: CanvasRenderingContext2D): void {
    context.beginPath()
    context.strokeStyle = this.color.value
    context.fillStyle = this.color.value
    context.moveTo(this.start.x, this.start.y)
    context.lineTo(this.start.x, this.end.y)
    context.lineTo(this.end.x, this.start.y)
    context.closePath()
    if (this.fill) {
      context.fill()
    } else {
      context.stroke()
    }
  }
}
