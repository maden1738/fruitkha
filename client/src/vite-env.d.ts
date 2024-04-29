/// <reference types="vite/client" />
declare global {
  interface ImportMeta {
    env: string; // Or a more specific type if you know your env var types
  }
}
