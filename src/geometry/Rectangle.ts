import Point from '../lib/math/Point'
import Shape from './Shape'
import Color from '../lib/util/Color'

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
   * Draw this rectangle on the canvas.
   *
   * @param context Drawing context
   */
  render (context: CanvasRenderingContext2D): void {
    context.beginPath()
    context.rect(this.start.x, this.start.y, this.end.x - this.start.x, this.end.y - this.start.y)
    if (this.fill) {
      context.fillStyle = this.color.value
      context.fill()
    } else {
      context.strokeStyle = this.color.value
      context.stroke()
    }
  }
}
