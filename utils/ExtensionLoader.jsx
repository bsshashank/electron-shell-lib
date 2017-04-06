// @flow

import path from 'path'
import uri from 'url'

import type { IExtension } from 'electron-shell-lib'

class ExtensionLoader {

  tryLoadExtension(extensionFolder: string, extensionName: string):?IExtension {
    let extensionInfo: IExtension
    try {
      extensionInfo = require(path.join(extensionFolder, extensionName))
    } catch (ex) {
      console.log(ex)
      extensionInfo = undefined
    }
    return extensionInfo
  }
}

export default ExtensionLoader
