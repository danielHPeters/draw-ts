import DrawingApp from './gui/DrawingApp'
import MenuBar from './gui/MenuBar'
import Settings from './config/Settings'
import ShapeTool from './tools/ShapeTool'
import { ToolID } from './tools/ToolID'
import Tool from './tools/Tool'

/**
 * Entry script of the web application.
 * Initializes the drawing context and the menu bar.
 */
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('pane') as HTMLCanvasElement
  const context = canvas.getContext('2d')
  const menuBar = document.getElementById('menuBar') as HTMLElement
  const settings = new Settings(menuBar.offsetHeight)
  const menu = new MenuBar(menuBar)
  const toolBox = new Map<ToolID, Tool>()
  toolBox.set(ToolID.SHAPE, new ShapeTool(settings))

  menu.addMenu('File')
  menu.addMenu('Edit', MenuBar.createEditMenu(settings, toolBox.get(ToolID.SHAPE), context, canvas))
  menu.addMenu('Color', MenuBar.createColorMenu(settings))
  menu.addMenu('Shapes', MenuBar.createShapesMenu(settings))
  menu.addMenu('Options', MenuBar.createOptionsMenu(settings))
  menu.addMenu('Help')
  new DrawingApp(canvas, menuBar, context, toolBox).init()
})
