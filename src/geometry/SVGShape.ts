import Shape, { Color } from '../interfaces/Shape'
import Point from '../lib/math/Point'
import Picture from '../lib/graphics/Picture'

/**
 * Brush that uses an svg image to draw.
 */
export default class SVGShape implements Shape {
  start: Point
  end: Point
  color: Color
  fill: boolean
  vectorImage: Picture

  /**
   * Constructor.
   *
   * @param start
   * @param end
   * @param color
   * @param fill
   * @param vectorImage
   */
  constructor (start: Point, end: Point, color: Color, fill: boolean, vectorImage: Picture) {
    this.start = start
    this.end = end
    this.color = color
    this.fill = fill
    this.vectorImage = vectorImage
  }

  /**
   *
   * @param context
   */
  render (context: CanvasRenderingContext2D): void {
    if (this.vectorImage.loaded) {
      context.drawImage(this.vectorImage.img, this.start.x, this.start.y)
    }
  }
}
