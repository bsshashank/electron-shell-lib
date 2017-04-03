// @flow

import ExtensionLoader from './utils/ExtensionLoader'
import Injector from './utils/Injector'

exports.utils = {
  extensionLoader: new ExtensionLoader(),
  injector: new Injector()
}
