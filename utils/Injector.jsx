// @flow

/**
 * Helper class for injecting JavaScript and/or CSS files into the running application
 */
class Injector {

  /**
   * adds a script reference to the current DOM
   * @param {string} href the URI of the JavaScript file to be injected
   */
  addJavaScriptReference (href:string) {
    let scriptNode = document.createElement('script')
    scriptNode.setAttribute('type', 'text/javascript')
    scriptNode.setAttribute('src', href)
    this._addNodeToDOM(scriptNode)
  }

  /**
   * adds a css file reference to the current DOM
   * @param {string} href the URI of the CSS file to be injected
   */
  addCSSFileReference (href:string) {
    let cssNode = document.createElement('link')
    cssNode.setAttribute('rel', 'stylesheet')
    cssNode.setAttribute('type', 'text/css')
    cssNode.setAttribute('href', href)
    this._addNodeToDOM(cssNode)
  }

  /**
   * adds a prepared HTML node to the document body
   * @param {HTMLElement} node the DOM element to be added to the document's body
   */
  _addNodeToDOM (node:HTMLElement) {
    if (document.body) {
      document.body.appendChild(node)
    }
  }
}

export default Injector
