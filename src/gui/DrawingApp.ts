import Tool from '../tools/Tool'
import { ToolID } from '../tools/ToolID'

/**
 * Main application class.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class DrawingApp {
  private menuBar: HTMLElement
  private canvas: HTMLCanvasElement
  private context: CanvasRenderingContext2D
  private toolBox: Map<ToolID, Tool>
  private activeTool: Tool

  /**
   * Default constructor.
   *
   * @param canvas Main drawing canvas
   * @param menuBar menu Bar HTML element that displays options and tools
   * @param context The context of the main canvas
   * @param toolBox Tools collection
   */
  constructor (canvas: HTMLCanvasElement, menuBar: HTMLElement, context: CanvasRenderingContext2D, toolBox: Map<ToolID, Tool>) {
    this.menuBar = menuBar
    this.canvas = canvas
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight - this.menuBar.offsetHeight
    this.context = context
    this.toolBox = toolBox
    this.activeTool = this.toolBox.get(ToolID.SHAPE)
  }

  /**
   * Initialize the mouse events.
   */
  public init (): void {
    this.canvas.addEventListener('mousedown', event => this.activeTool.click(event))
    this.canvas.addEventListener('mousemove', event => {
      this.activeTool.move(event)
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.activeTool.renderAll(this.context)
      this.activeTool.tempShape.render(this.context)
    })
    this.canvas.addEventListener('mouseup', event => {
      this.activeTool.release(event)
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.activeTool.renderAll(this.context)
    })
  }
}
