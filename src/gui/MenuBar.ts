import { ShapeType } from '../factory/ShapeFactory'
import Tool from '../tools/Tool'
import Settings from '../config/Settings'
import Color from '../lib/util/Color'

/**
 * Menu bar at the top of the web app.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class MenuBar {
  private element: HTMLElement
  private readonly submenus: Record<string, HTMLElement>

  constructor (element: HTMLElement) {
    this.element = element
    this.submenus = {}
  }

  static createEditMenu (settings: Settings, tool: Tool, context: CanvasRenderingContext2D, canvas: HTMLCanvasElement): HTMLElement[] {
    const editEntries = []
    const entryText = 'Undo'
    const menuEntry = document.createElement('li') as HTMLElement
    const menuLink = document.createElement('a')

    menuLink.setAttribute('href', '#')
    menuLink.setAttribute('id', entryText.toLowerCase())
    menuLink.appendChild(document.createTextNode(entryText))
    menuEntry.appendChild(menuLink)
    menuEntry.classList.add('menu-entry')
    menuEntry.addEventListener('click', () => tool.undo(context, canvas.width, canvas.height))
    editEntries.push(menuEntry)
    return editEntries
  }

  static createColorMenu (settings: Settings): HTMLElement[] {
    const colors = ['Red', 'Black', 'Blue', 'Yellow']
    const colorEntries = []

    colors.forEach(color => {
      const menuEntry = document.createElement('li') as HTMLElement
      const menuLink = document.createElement('a')
      menuLink.setAttribute('href', '#')
      menuLink.setAttribute('id', color.toLowerCase())
      menuLink.appendChild(document.createTextNode(color))
      menuEntry.appendChild(menuLink)
      menuEntry.classList.add('menu-entry')
      menuEntry.addEventListener('click', () => settings.activeColor = Color.getPredefinedColor(color.toUpperCase()))
      colorEntries.push(menuEntry)
    })

    const colorForm = document.createElement('form')
    const colorInput = document.createElement('input') as HTMLInputElement

    colorInput.setAttribute('type', 'color')
    colorInput.setAttribute('accept', Color.VALID_COLOR)
    colorInput.addEventListener('change', () => settings.activeColor = new Color(colorInput.value))
    colorForm.appendChild(colorInput)
    colorForm.classList.add('menu-entry')
    colorEntries.push(colorForm)
    return colorEntries
  }

  static createShapesMenu (settings: Settings): HTMLElement[] {
    const tools = ['Line', 'Rectangle', 'Triangle', 'Circle', 'Smiley', 'Svg']
    const toolEntries: HTMLElement[] = []

    tools.forEach(shape => {
      const menuEntry = document.createElement('li') as HTMLElement
      const menuLink = document.createElement('a')
      menuLink.setAttribute('href', '#')
      menuLink.setAttribute('id', shape.toLowerCase())
      menuLink.appendChild(document.createTextNode(shape))
      menuEntry.appendChild(menuLink)
      menuEntry.classList.add('menu-entry')
      menuEntry.addEventListener('click', () => settings.activeTool = ShapeType[shape.toUpperCase() as keyof typeof ShapeType])
      toolEntries.push(menuEntry)
    })
    return toolEntries
  }

  static createOptionsMenu (settings: Settings): HTMLElement[] {
    const optionEntries = []
    const entryText = 'Fill'
    const menuEntry = document.createElement('li') as HTMLElement
    const menuInput = document.createElement('input')

    menuInput.setAttribute('type', 'checkbox')
    menuInput.setAttribute('id', entryText.toLowerCase())
    menuEntry.appendChild(document.createTextNode(entryText))
    menuEntry.appendChild(menuInput)
    menuEntry.classList.add('menu-entry')
    menuEntry.addEventListener('click', () => {
      settings.fill = !settings.fill
      console.log(settings.fill)
    })
    optionEntries.push(menuEntry)
    return optionEntries
  }

  /**
   * Adds a top level menu entry.
   *
   * @param title Display text of the menu and id
   * @param entries Submenus and submenu entries
   */
  addMenu (title: string, entries: HTMLElement[] = []): void {
    let submenu = document.createElement('li') as HTMLElement
    let menuLink = document.createElement('a')

    menuLink.setAttribute('href', '#')
    menuLink.appendChild(document.createTextNode(title))
    submenu.appendChild(menuLink)
    submenu.classList.add('submenu')
    submenu.setAttribute('id', title.toLowerCase())
    if (entries.length > 0) {
      const list = document.createElement('ul')
      list.classList.add('submenu-content')
      submenu.appendChild(list)
      entries.forEach(entry => {
        list.appendChild(entry)
      })
    }
    this.submenus[title.toLowerCase()] = submenu
    this.element.appendChild(submenu)
  }

  /**
   * Get a menu by the set id.
   *
   * @param title ID and title text of menu
   * @returns The menu element
   */
  getMenu (title: string): HTMLElement | null {
    return this.submenus.hasOwnProperty(title.toLowerCase()) ? this.submenus[title.toLowerCase()] : null
  }
}
