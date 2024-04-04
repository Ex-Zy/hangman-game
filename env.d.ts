/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_RANDOM_WORD: string
  readonly VITE_APP_CATEGORY: string
  readonly VITE_APP_DEFAULT_CATEGORY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
