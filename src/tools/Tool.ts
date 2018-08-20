import Settings from '../config/Settings'
import Shape from '../geometry/Shape'

/**
 * Interface for drawing Tools.
 *
 * @author Daniel Peters <daniel.peters.ch@gmail.com>
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
   * @param context
   */
  renderAll (context: CanvasRenderingContext2D): void

  /**
   *
   * @param context
   * @param width
   * @param height
   */
  undo (context: CanvasRenderingContext2D, width: number, height: number): void
}
