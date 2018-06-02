import Point from '../lib/math/Point'
import Settings from '../config/Settings'
import Tool from '../interfaces/Tool'
import Shape from '../interfaces/Shape'
import ShapeFactory from '../factory/ShapeFactory'

/**
 * Tool to draw history on the canvas.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class ShapeTool implements Tool {
  start: Point
  end: Point
  history: Shape[]
  tempShape: Shape
  settings: Settings
  down: boolean

  /**
   * Default constructor.
   *
   * @param settings Application settings
   */
  constructor (settings: Settings) {
    this.start = new Point(0, 0)
    this.end = new Point(0, 0)
    this.history = settings.history
    this.settings = settings
    this.tempShape = ShapeFactory.create(this.settings.activeTool, this.start, this.end, this.settings.activeColor, this.settings.fill)
    this.down = false
  }

  /**
   * Mouse down event handler.
   * Starts the temporary drawing of a shape.
   *
   * @param event Mouse click event
   */
  click (event): void {
    this.down = true
    this.start.set(event.clientX, event.clientY - this.settings.menuHeight)
  }

  /**
   * Mouse drag event while holding down the mouse.
   * Used for drawing the temporary history.
   *
   * @param event Mouse move event
   */
  move (event): void {
    if (!this.down) return
    this.tempShape = ShapeFactory.create(this.settings.activeTool, this.start, this.end, this.settings.activeColor, this.settings.fill)
    this.tempShape.end.set(event.clientX, event.clientY - this.settings.menuHeight)
  }

  /**
   * Event handler for when the mouse is released.
   * Adds the temporary shape to the list of drawn history.
   *
   * @param event Mouse release event
   */
  release (event): void {
    this.end.set(event.clientX, event.clientY - this.settings.menuHeight)
    this.history.push(ShapeFactory.create(this.settings.activeTool, this.start.clone(), this.end.clone(), this.settings.activeColor, this.settings.fill))
    this.down = false
  }

  /**
   * Draw all shapes on the canvas.
   * @param context Canvas rendering context
   */
  renderAll (context): void {
    this.history.forEach(shape => shape.render(context))
  }

  /**
   * Undo the drawing of the last shape by removing the last shape from the history and redrawing the canvas.
   *
   * @param context Canvas rendering context
   * @param width Canvas width used to clear the whole canvas
   * @param height Canvas height used to clear the whole canvas
   */
  undo (context: CanvasRenderingContext2D, width: number, height: number): void {
    if (this.history.length > 0) {
      context.clearRect(0, 0, width, height)
      this.tempShape.start.set(0, 0)
      this.tempShape.end.set(0, 0)
      this.history.pop()
      this.renderAll(context)
    }
  }
}
