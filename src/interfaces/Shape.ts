import Point from '../lib/math/Point'

/**
 * Basic hex-color enum.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export enum Color {
  RED = '#FF0000',
  GREEN = '#00FF00',
  BLUE = '#0000FF',
  YELLOW = '#FFFF00',
  BLACK = '#000000'
}

/**
 * Regex for verifying hex-color formats.
 * Valid formats are: #000 or #000000.
 *
 * @type {string}
 */
export const VALID_COLOR = '^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$'

/**
 * Interface for drawing shapes.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default interface Shape {
  start: Point
  end: Point
  color: Color
  fill: boolean

  /**
   * Draws the shape onto the canvas.
   *
   * @param {CanvasRenderingContext2D} context Canvas rendering context
   */
  render (context: CanvasRenderingContext2D): void
}
