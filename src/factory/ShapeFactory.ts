import Shape from '../geometry/Shape'
import Point from '../lib/math/Point'
import Rectangle from '../geometry/Rectangle'
import Triangle from '../geometry/Triangle'
import Circle from '../geometry/Circle'
import Smiley from '../geometry/Smiley'
import Line from '../geometry/Line'
import SVGShape from '../geometry/SVGShape'
import Picture from '../lib/graphics/Picture'
import Color from '../lib/util/Color'

export enum ShapeType {
  LINE, RECTANGLE, TRIANGLE, CIRCLE, SMILEY, SVG
}

/**
 * Factory class for generating shapes.
 *
 * @author Daniel Peters <daniel.peters.ch@gmail.com>
 * @version 1.0
 */
export default class ShapeFactory {
  /**
   * Generate a specified shape object.
   *
   * @param shapeType Type of the shape
   * @param start Starting location
   * @param end End location
   * @param color Drawing color
   * @param fill Flag determining whether the shape should be filled
   * @returns The generated shapes
   */
  static create (shapeType: ShapeType, start: Point, end: Point, color: Color, fill: boolean): Shape {
    let shape
    switch (shapeType) {
      case ShapeType.LINE:
        shape = new Line(start, end, color, fill)
        break
      case ShapeType.RECTANGLE:
        shape = new Rectangle(start, end, color, fill)
        break
      case ShapeType.TRIANGLE:
        shape = new Triangle(start, end, color, fill)
        break
      case ShapeType.CIRCLE:
        shape = new Circle(start, end, color, fill)
        break
      case ShapeType.SMILEY:
        shape = new Smiley(start, end, color, fill)
        break
      case ShapeType.SVG:
        shape = new SVGShape(start, end, color, fill, new Picture('/brushes/bird.svg'))
        break
      default:
        throw new Error('Invalid Shape Type!')
    }
    return shape
  }
}
