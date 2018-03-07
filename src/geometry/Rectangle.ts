import Point from '../lib/math/Point'
import Shape, { Color } from '../interfaces/Shape'

/**
 * Rectangle shape to be drawn on a canvas.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Rectangle implements Shape {
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
   * Draw this rectangle on the canvas.
   *
   * @param {CanvasRenderingContext2D} context Drawing context
   */
  render (context: CanvasRenderingContext2D): void {
    context.beginPath()
    context.rect(this.start.x, this.start.y, this.end.x - this.start.x, this.end.y - this.start.y)
    if (this.fill) {
      context.fillStyle = this.color
      context.fill()
    } else {
      context.strokeStyle = this.color
      context.stroke()
    }
  }
}
