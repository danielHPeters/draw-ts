import Point from '../lib/math/Point'
import Shape, { Color } from './Shape'

/**
 * Line shape to be drawn on a canvas element.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class Line implements Shape {
  start: Point
  end: Point
  color: Color
  fill: boolean

  /**
   * Default constructor.
   *
   * @param start Tool start location
   * @param end Tool release location
   * @param color Stroke color
   * @param fill Flag determining whether the shape should be filled
   */
  constructor (start: Point, end: Point, color: Color, fill: boolean) {
    this.start = start
    this.end = end
    this.color = color
    this.fill = fill
  }

  /**
   * Draw this line on the canvas.
   *
   * @param context drawing context
   */
  render (context: CanvasRenderingContext2D): void {
    context.beginPath()
    context.strokeStyle = this.color
    context.moveTo(this.start.x, this.start.y)
    context.lineTo(this.end.x, this.end.y)
    context.stroke()
  }
}
