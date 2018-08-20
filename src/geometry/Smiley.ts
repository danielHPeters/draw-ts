import Shape from './Shape'
import Point from '../lib/math/Point'
import Color from '../lib/util/Color'

/**
 * Smiley Shape to draw on the canvas element.
 *
 * @author Daniel Peters <daniel.peters.ch@gmail.com>
 * @version 1.0
 */
export default class Smiley implements Shape {
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
   * Draw the Smiley onto the canvas.
   *
   * @param context Canvas rendering context
   */
  render (context: CanvasRenderingContext2D): void {
    const radius = Math.abs(this.end.x - this.start.x)
    context.beginPath()
    context.strokeStyle = this.color.value
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
