import Shape, { Color } from './Shape'
import Point from '../lib/math/Point'

/**
 * Smiley Shape to draw on the canvas element.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Smiley implements Shape {
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
   * Draw the Smiley onto the canvas.
   *
   * @param context Canvas rendering context
   */
  render (context: CanvasRenderingContext2D): void {
    const radius = Math.abs(this.end.x - this.start.x)
    context.beginPath()
    context.strokeStyle = this.color
    context.arc(this.start.x, this.start.y, radius, 0, Math.PI * 2, true) // Outer circle
    context.moveTo(this.start.x + (radius * 0.7), this.start.y)
    context.arc(this.start.x, this.start.y, radius * 0.7, 0, Math.PI, false)  // Mouth (clockwise)
    context.moveTo(this.start.x - (radius * 0.3) + radius * 0.1, this.start.y - (radius * 0.2))
    context.arc(this.start.x - (radius * 0.3), this.start.y - (radius * 0.2), radius * 0.1, 0, Math.PI * 2, false)  // Left eye
    context.moveTo(this.start.x + (radius * 0.3) + radius * 0.1, this.start.y - (radius * 0.2))
    context.arc(this.start.x + (radius * 0.3), this.start.y - (radius * 0.2), radius * 0.1, 0, Math.PI * 2, true)  // Right eye
    context.stroke()
  }
}
