import { defineNuxtModule, addPluginTemplate, createResolver } from '@nuxt/kit'
import type { InitOptions } from 'eruda'

export type AvailableErudaPlugins = 'eruda-vue' | 'eruda-monitor' | 'eruda-features' | 'eruda-timing'
  | 'eruda-code' | 'eruda-benchmark' | 'eruda-geolocation' | 'eruda-orientation' | 'eruda-touches'

export interface ModuleOptions {
  /**
   * 是否开启 eruda
   */
  enabled?: boolean

  /**
   * eruda 初始化配置
   */
  initOptions?: InitOptions

  /**
   * 添加 eruda 插件
   */
  plugins?: AvailableErudaPlugins[]

}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-eruda',
    configKey: 'eruda',
  },
  defaults: {
    enabled: false,
    initOptions: {},
    plugins: ['eruda-vue'],
  },
  setup(moduleOptions, _nuxt) {
    const resolver = createResolver(import.meta.url)

    if (moduleOptions.enabled) {
      const availablePlugins = moduleOptions.plugins?.map((v) => {
        return {
          name: v,
          const: v.replace('-', '_'),
        }
      })

      addPluginTemplate({
        src: resolver.resolve('runtime/plugins/eruda.ejs'),
        filename: 'nuxt-eruda-plugin.mjs',
        mode: 'client',
        options: {
          ...moduleOptions,
          availablePlugins,
        },
      })
    }
  },

})
