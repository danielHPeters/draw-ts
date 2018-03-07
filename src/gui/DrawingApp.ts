import Tool from '../interfaces/Tool'

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
  private tool: Tool

  /**
   * Default constructor.
   *
   * @param {HTMLCanvasElement} canvas Main drawing canvas
   * @param {HTMLElement} menuBar menu Bar HTML element that displays options and tools
   * @param {CanvasRenderingContext2D} context The context of the main canvas
   * @param {Tool} tool Drawing tool
   */
  constructor (canvas: HTMLCanvasElement, menuBar: HTMLElement, context: CanvasRenderingContext2D, tool: Tool) {
    this.menuBar = menuBar
    this.canvas = canvas
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight - this.menuBar.offsetHeight
    this.context = context
    this.tool = tool
  }

  /**
   * Initialize the mouse events.
   */
  public init (): void {
    this.canvas.addEventListener('mousedown', event => this.tool.click(event))
    this.canvas.addEventListener('mousemove', event => {
      this.tool.move(event)
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.tool.renderAll(this.context)
      this.tool.tempShape.render(this.context)
    })
    this.canvas.addEventListener('mouseup', event => {
      this.tool.release(event)
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.tool.renderAll(this.context)
    })
  }
}
