import Shape from './Shape'
import Point from '../lib/math/Point'
import Picture from '../lib/graphics/Picture'
import Color from '../lib/util/Color'

/**
 * Brush that uses an svg image to draw.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class SVGShape implements Shape {
  /**
   * Constructor.
   *
   * @param start
   * @param end
   * @param color
   * @param fill
   * @param vectorImage
   */
  constructor (public start: Point, public end: Point, public color: Color, public fill: boolean, public vectorImage: Picture) {}

  render (context: CanvasRenderingContext2D): void {
    if (this.vectorImage.loaded) {
      context.drawImage(this.vectorImage.img, this.start.x, this.start.y)
    }
  }
}
