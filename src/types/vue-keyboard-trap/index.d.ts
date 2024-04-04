declare module '@pdanpdan/vue-keyboard-trap' {
  import { App } from 'vue'

  interface IVueKeyboardTrapDirectiveOptions {
    name?: string
    datasetName?: string
    focusableSelector?: string
    rovingSkipSelector?: string
    gridSkipSelector?: string
    autofocusSelector?: string
    trapTabIndex?: number
  }

  interface IVueDirectivePlugin {
    install(app: App, options: IVueKeyboardTrapDirectiveOptions): void
  }

  const VueKeyboardTrapDirectivePlugin: IVueDirectivePlugin
  export default VueKeyboardTrapDirectivePlugin
}
