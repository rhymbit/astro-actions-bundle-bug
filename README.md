# Cannot bundle Node.js built-in "node:async_hooks"

- Using `pnpm`
- Astro's version from package.json - `"astro": "^4.8.2",`
- I'm using WSL2 on a Windows 11 PC
  ```bash
  ➜ uname -mprs
  Linux 5.15.146.1-microsoft-standard-WSL2 x86_64 x86_64
    ```

### Error

Just the Error part from the build step
```bash
24:37:24 [ERROR] [vite] x Build failed in 243ms
[commonjs--resolver] [plugin vite:resolve] Cannot bundle Node.js built-in "node:async_hooks" imported from "node_modules/.pnpm/astro@4.8.2_typescript@5.4.5/node_modules/astro/dist/actions/runtime/store.js". Consider disabling ssr.noExternal or remove the built-in dependency.
  Stack trace:
    at getRollupError (file:///home/rhymbit/code/astro-actions-bundle-bug/node_modules/.pnpm/rollup@4.17.2/node_modules/rollup/dist/es/shared/parseAst.js:394:41)
    at Object.error (file:///home/rhymbit/code/astro-actions-bundle-bug/node_modules/.pnpm/rollup@4.17.2/node_modules/rollup/dist/es/shared/node-entry.js:19593:20)
    at Object.handler (file:///home/rhymbit/code/astro-actions-bundle-bug/node_modules/.pnpm/vite@5.2.11/node_modules/vite/dist/node/chunks/dep-cNe07EU9.js:67676:19)
    at async PluginDriver.hookFirstAndGetPlugin (file:///home/rhymbit/code/astro-actions-bundle-bug/node_modules/.pnpm/rollup@4.17.2/node_modules/rollup/dist/es/shared/node-entry.js:19678:28)
    at async ModuleLoader.resolveId (file:///home/rhymbit/code/astro-actions-bundle-bug/node_modules/.pnpm/rollup@4.17.2/node_modules/rollup/dist/es/shared/node-entry.js:18762:15)
 ELIFECYCLE  Command failed with exit code 1.
```