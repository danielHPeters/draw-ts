import DrawingApp from './gui/DrawingApp'
import MenuBar from './gui/MenuBar'
import Settings from './config/Settings'
import ShapeTool from './tools/ShapeTool'
import { ToolID } from './tools/ToolID'
import Tool from './tools/Tool'

/**
 * Entry script of the web application.
 * Initializes the drawing context and the menu bar.
 *
 * @author Daniel Peters <daniel.peters.ch@gmail.com>
 * @version 1.0
 */
document.addEventListener('DOMContentLoaded', () => {
  const fragment = document.createDocumentFragment()
  const canvas = document.createElement('canvas') as HTMLCanvasElement
  // const canvas = document.getElementById('pane') as HTMLCanvasElement
  const context = canvas.getContext('2d')
  const menuBar = document.createElement('ul') as HTMLElement
  const settings = new Settings(menuBar.offsetHeight)
  const menu = new MenuBar(menuBar)
  const toolBox = new Map<ToolID, Tool>()
  const shapeTool = new ShapeTool(settings)

  if (context) {
    canvas.classList.add('app-canvas')
    canvas.width = 500
    canvas.height = 500
    toolBox.set(ToolID.SHAPE, shapeTool)
    menuBar.classList.add('menu-bar')
    menu.addMenu('File')
    menu.addMenu('Edit', MenuBar.createEditMenu(settings, shapeTool, context, canvas))
    menu.addMenu('Color', MenuBar.createColorMenu(settings))
    menu.addMenu('Shapes', MenuBar.createShapesMenu(settings))
    menu.addMenu('Options', MenuBar.createOptionsMenu(settings))
    menu.addMenu('Help')
    fragment.appendChild(menuBar)
    fragment.appendChild(canvas)
    document.body.appendChild(fragment)
    new DrawingApp(canvas, menuBar, context, toolBox).init()
  } else {
    console.error('Failed to initialize canvas rendering context.')
  }
})
