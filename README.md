# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Deployment on Shared Hosting (cPanel)

To deploy this project on cPanel or any Apache-based shared hosting:

1.  **Build the project**:
    Run `npm run build`. This will generate a `dist` folder.

2.  **Upload the content**:
    Upload the contents of the `dist` folder to your `public_html` directory (or the specific subdirectory for your domain).

3.  **Routing (SPAs)**:
    A `.htaccess` file is included in the `public` folder and will be copied to `dist` during the build. This file ensures that all routes are redirected to `index.html`, which is necessary for the Vue Router's history mode.

4.  **Subdirectory Deployment**:
    If you are deploying to a subdirectory (e.g., `https://example.com/my-app/`), you must update the `base` option in `vite.config.js`:
    ```javascript
    export default defineConfig({
      base: '/my-app/',
      // ...
    })
    ```
    And also update the history base in `src/router/index.js` if needed.
