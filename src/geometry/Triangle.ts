import Shape, { Color } from '../interfaces/Shape'
import Point from '../lib/math/Point'

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
   * @param {Point} start Starting point of this shape
   * @param {Point} end Ending point of this shape
   * @param {Color} color The color of this shape
   * @param {boolean} fill Flag determining whether this shape should be filled
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
   * @param {CanvasRenderingContext2D} context Canvas rendering context
   */
  render (context: CanvasRenderingContext2D): void {
    context.beginPath()
    context.strokeStyle = this.color
    context.fillStyle = this.color
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
