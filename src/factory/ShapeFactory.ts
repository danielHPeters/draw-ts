import Shape, { Color } from '../interfaces/Shape'
import Point from '../lib/math/Point'
import Rectangle from '../geometry/Rectangle'
import Triangle from '../geometry/Triangle'
import Circle from '../geometry/Circle'
import Smiley from '../geometry/Smiley'
import Line from '../geometry/Line'
import SVGShape from '../geometry/SVGShape'
import Picture from '../lib/graphics/Picture'

export enum ShapeType {
  LINE, RECTANGLE, TRIANGLE, CIRCLE, SMILEY, SVG
}

/**
 * Factory class for generating shapes.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class ShapeFactory {
  /**
   * Generate a specified shape object.
   *
   * @param {ShapeType} shapeType Type of the shape
   * @param {Point} start Starting location
   * @param {Point} end End location
   * @param {Color} color Drawing color
   * @param {boolean} fill Flag determining whether the shape should be filled
   * @returns {Shape} The generated shapes
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
