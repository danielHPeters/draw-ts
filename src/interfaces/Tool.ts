import Settings from '../config/Settings'
import Shape from './Shape'

/**
 * Interface for drawing Tools.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default interface Tool {
  down: boolean
  settings: Settings
  tempShape: Shape
  history: Shape[]

  /**
   *
   * @param event
   */
  click (event): void

  /**
   *
   * @param event
   */
  move (event): void

  /**
   *
   * @param event
   */
  release (event): void

  /**
   *
   * @param {CanvasRenderingContext2D} context
   */
  renderAll (context: CanvasRenderingContext2D): void

  /**
   *
   * @param {CanvasRenderingContext2D} context
   * @param {number} width
   * @param {number} height
   */
  undo (context: CanvasRenderingContext2D, width: number, height: number): void
}
