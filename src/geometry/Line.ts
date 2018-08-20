import Point from '../lib/math/Point'
import Shape from './Shape'
import Color from '../lib/util/Color'

/**
 * Line shape to be drawn on a canvas element.
 *
 * @author Daniel Peters <daniel.peters.ch@gmail.com>
 * @version 1.0
 */
export default class Line implements Shape {
  /**
   * Default constructor.
   *
   * @param start Tool start location
   * @param end Tool release location
   * @param color Stroke color
   * @param fill Flag determining whether the shape should be filled
   */
  constructor (public start: Point, public end: Point, public color: Color, public fill: boolean) {}

  /**
   * Draw this line on the canvas.
   *
   * @param context drawing context
   */
  render (context: CanvasRenderingContext2D): void {
    context.beginPath()
    context.strokeStyle = this.color.value
    context.moveTo(this.start.x, this.start.y)
    context.lineTo(this.end.x, this.end.y)
    context.stroke()
  }
}
