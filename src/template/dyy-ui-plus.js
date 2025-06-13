import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'
import { getCurrentInstance } from 'vue'
let installed = false
await loadStyle()

export function setupElementPlus() {
  if (installed) return
  const instance = getCurrentInstance()
  instance.appContext.app.use(ElementPlus, {locale: zhCn})
  if (instance.appContext.app) {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      instance.appContext.app.component(key, component)
    }
  }
  installed = true
}

export function loadStyle() {
  const styles = ['#STYLE#', '#DARKSTYLE#', '#DYYSTYLE#'].map((style) => {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = style
      link.addEventListener('load', resolve)
      link.addEventListener('error', reject)
      document.body.append(link)
    })
  })
  return Promise.allSettled(styles)
}
