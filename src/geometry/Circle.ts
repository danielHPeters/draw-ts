import Shape, { Color } from './Shape'
import Point from '../lib/math/Point'

/**
 * Circle shape to be drawn on a canvas.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Circle implements Shape {
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
   * Draws the circle on a canvas.
   *
   * @param context Canvas rendering context
   */
  render (context: CanvasRenderingContext2D): void {
    const radius = Math.abs(this.end.x - this.start.x)
    if (radius !== 0) {
      context.beginPath()
      context.strokeStyle = this.color
      context.arc(this.start.x, this.start.y, radius, 0, Math.PI * 2, true)
      if (this.fill) {
        context.fillStyle = this.color
        context.fill()
      } else {
        context.stroke()
      }
    }
  }
}
