/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RECAPTCHA_SITE_KEY: string
  readonly RECAPTCHA_SECRET_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}