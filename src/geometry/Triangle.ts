import Shape from './Shape'
import Point from '../lib/math/Point'
import Color from '../lib/util/Color'

/**
 * Triangle shape to be drawn on a canvas object.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Triangle implements Shape {
  start: Point
  end: Point
  color: Color
  fill: boolean

  /**
   * Default constructor.
   *
   * @param start Starting point of this shape
   * @param end Ending point of this shape
   * @param color The color of this shape
   * @param fill Flag determining whether this shape should be filled
   */
  constructor (start: Point, end: Point, color: Color, fill: boolean) {
    this.start = start
    this.end = end
    this.color = color
    this.fill = fill
  }

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
