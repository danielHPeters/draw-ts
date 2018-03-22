import { Color, VALID_COLOR } from '../interfaces/Shape'
import { ShapeType } from '../factory/ShapeFactory'
import Tool from '../interfaces/Tool'
import Settings from '../config/Settings'

/**
 * Menu bar at the top of the web app.
 *
 * @author Daniel Peters
 * @version 1.0
 */
export default class MenuBar {
  private element: HTMLElement
  private submenus: HTMLElement[]

  /**
   *
   * @param {HTMLElement} element
   */
  constructor (element: HTMLElement) {
    this.element = element
    this.submenus = []
  }

  /**
   *
   * @param {Settings} settings
   * @param {Tool} tool
   * @param {CanvasRenderingContext2D} context
   * @param {HTMLCanvasElement} canvas
   * @returns {HTMLElement[]}
   */
  static createEditMenu (settings: Settings, tool: Tool, context: CanvasRenderingContext2D, canvas: HTMLCanvasElement): HTMLElement[] {
    const editEntries = []
    const entryText = 'Undo'
    const menuEntry = document.createElement('li') as HTMLElement
    const menuLink = document.createElement('a')
    menuLink.setAttribute('href', '#')
    menuLink.setAttribute('id', entryText.toLowerCase())
    menuLink.appendChild(document.createTextNode(entryText))
    menuEntry.appendChild(menuLink)
    menuEntry.classList.add('menuEntry')
    menuEntry.addEventListener('click', () => {
      tool.undo(context, canvas.width, canvas.height)
    })
    editEntries.push(menuEntry)
    return editEntries
  }

  /**
   *
   * @param {Settings} settings
   * @returns {HTMLElement[]}
   */
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
      menuEntry.classList.add('menuEntry')
      menuEntry.addEventListener('click', () => {
        settings.activeColor = Color[color.toUpperCase()]
      })
      colorEntries.push(menuEntry)
    })

    const colorForm = document.createElement('form')
    const colorInput = document.createElement('input') as HTMLInputElement
    colorInput.setAttribute('type', 'color')
    colorInput.setAttribute('accept', VALID_COLOR)
    colorInput.addEventListener('change', () => {
      settings.activeColor = colorInput.value
    })
    colorForm.appendChild(colorInput)
    colorForm.classList.add('menuEntry')
    colorEntries.push(colorForm)
    return colorEntries
  }

  /**
   *
   * @param settings
   * @returns {HTMLElement[]}
   */
  static createShapesMenu (settings): HTMLElement[] {
    const tools = ['Line', 'Rectangle', 'Triangle', 'Circle', 'Smiley', 'Svg']
    const toolEntries = []
    tools.forEach(shape => {
      const menuEntry = document.createElement('li') as HTMLElement
      const menuLink = document.createElement('a')
      menuLink.setAttribute('href', '#')
      menuLink.setAttribute('id', shape.toLowerCase())
      menuLink.appendChild(document.createTextNode(shape))
      menuEntry.appendChild(menuLink)
      menuEntry.classList.add('menuEntry')
      menuEntry.addEventListener('click', () => {
        settings.activeTool = ShapeType[shape.toUpperCase()]
      })
      toolEntries.push(menuEntry)
    })
    return toolEntries
  }

  /**
   *
   * @param {Settings} settings
   * @returns {HTMLElement[]}
   */
  static createOptionsMenu (settings: Settings): HTMLElement[] {
    const optionEntries = []
    const entryText = 'Fill'
    const menuEntry = document.createElement('li') as HTMLElement
    const menuInput = document.createElement('input')
    menuInput.setAttribute('type', 'checkbox')
    menuInput.setAttribute('id', entryText.toLowerCase())
    menuEntry.appendChild(document.createTextNode(entryText))
    menuEntry.appendChild(menuInput)
    menuEntry.classList.add('menuEntry')
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
   * @param {string} title Display text of the menu and id
   * @param {HTMLElement[]} entries Submenus and submenu entries
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
   * @param {string} title ID and title text of menu
   * @returns {HTMLElement} The menu element
   */
  getMenu (title: string): HTMLElement {
    return this.submenus.hasOwnProperty(title.toLowerCase()) ? this.submenus[title.toLowerCase()] : null
  }
}
