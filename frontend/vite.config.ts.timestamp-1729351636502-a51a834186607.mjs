// ../frontend/vite.config.ts
import { vitePlugin as remix } from "file:///root/projet/nestjs-remix-monorepo/node_modules/@remix-run/dev/dist/index.js";
import { installGlobals } from "file:///root/projet/nestjs-remix-monorepo/node_modules/@remix-run/node/dist/index.js";
import { resolve } from "path";
import { flatRoutes } from "file:///root/projet/nestjs-remix-monorepo/node_modules/remix-flat-routes/dist/index.js";
import { defineConfig } from "file:///root/projet/nestjs-remix-monorepo/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///root/projet/nestjs-remix-monorepo/node_modules/vite-tsconfig-paths/dist/index.mjs";
var __vite_injected_original_dirname = "/root/projet/nestjs-remix-monorepo/frontend";
var MODE = process.env.NODE_ENV;
installGlobals();
var vite_config_default = defineConfig({
  resolve: {
    preserveSymlinks: true
  },
  build: {
    cssMinify: MODE === "production",
    sourcemap: true,
    commonjsOptions: {
      include: [/frontend/, /backend/, /node_modules/]
    }
  },
  plugins: [
    // cjsInterop({
    // 	dependencies: ['remix-utils', 'is-ip', '@markdoc/markdoc'],
    // }),
    tsconfigPaths({}),
    remix({
      ignoredRouteFiles: ["**/*"],
      future: {
        v3_fetcherPersist: true
      },
      // When running locally in development mode, we use the built in remix
      // server. This does not understand the vercel lambda module format,
      // so we default back to the standard build output.
      // ignoredRouteFiles: ['**/.*', '**/*.test.{js,jsx,ts,tsx}'],
      serverModuleFormat: "esm",
      routes: async (defineRoutes) => {
        return flatRoutes("routes", defineRoutes, {
          ignoredRouteFiles: [
            ".*",
            "**/*.css",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__*.*"
            // This is for server-side utilities you want to colocate next to
            // your routes without making an additional directory.
            // If you need a route that includes "server" or "client" in the
            // filename, use the escape brackets like: my-route.[server].tsx
            // 	'**/*.server.*',
            // 	'**/*.client.*',
          ],
          // Since process.cwd() is the server directory, we need to resolve the path to remix project
          appDir: resolve(__vite_injected_original_dirname, "app")
        });
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vZnJvbnRlbmQvdml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvcm9vdC9wcm9qZXQvbmVzdGpzLXJlbWl4LW1vbm9yZXBvL2Zyb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvcm9vdC9wcm9qZXQvbmVzdGpzLXJlbWl4LW1vbm9yZXBvL2Zyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9yb290L3Byb2pldC9uZXN0anMtcmVtaXgtbW9ub3JlcG8vZnJvbnRlbmQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyB2aXRlUGx1Z2luIGFzIHJlbWl4IH0gZnJvbSBcIkByZW1peC1ydW4vZGV2XCI7XG5pbXBvcnQgeyBpbnN0YWxsR2xvYmFscyB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgZmxhdFJvdXRlcyB9IGZyb20gXCJyZW1peC1mbGF0LXJvdXRlc1wiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI7XG5cbmNvbnN0IE1PREUgPSBwcm9jZXNzLmVudi5OT0RFX0VOVjtcbmluc3RhbGxHbG9iYWxzKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHJlc29sdmU6IHtcbiAgICBwcmVzZXJ2ZVN5bWxpbmtzOiB0cnVlLFxuICB9LFxuICBidWlsZDoge1xuICAgIGNzc01pbmlmeTogTU9ERSA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gICAgc291cmNlbWFwOiB0cnVlLFxuICAgIGNvbW1vbmpzT3B0aW9uczoge1xuICAgICAgaW5jbHVkZTogWy9mcm9udGVuZC8sIC9iYWNrZW5kLywgL25vZGVfbW9kdWxlcy9dLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICAvLyBjanNJbnRlcm9wKHtcbiAgICAvLyBcdGRlcGVuZGVuY2llczogWydyZW1peC11dGlscycsICdpcy1pcCcsICdAbWFya2RvYy9tYXJrZG9jJ10sXG4gICAgLy8gfSksXG4gICAgdHNjb25maWdQYXRocyh7fSksXG4gICAgcmVtaXgoe1xuICAgICAgaWdub3JlZFJvdXRlRmlsZXM6IFtcIioqLypcIl0sXG4gICAgICBmdXR1cmU6IHtcbiAgICAgICAgdjNfZmV0Y2hlclBlcnNpc3Q6IHRydWUsXG4gICAgICB9LFxuXG4gICAgICAvLyBXaGVuIHJ1bm5pbmcgbG9jYWxseSBpbiBkZXZlbG9wbWVudCBtb2RlLCB3ZSB1c2UgdGhlIGJ1aWx0IGluIHJlbWl4XG4gICAgICAvLyBzZXJ2ZXIuIFRoaXMgZG9lcyBub3QgdW5kZXJzdGFuZCB0aGUgdmVyY2VsIGxhbWJkYSBtb2R1bGUgZm9ybWF0LFxuICAgICAgLy8gc28gd2UgZGVmYXVsdCBiYWNrIHRvIHRoZSBzdGFuZGFyZCBidWlsZCBvdXRwdXQuXG4gICAgICAvLyBpZ25vcmVkUm91dGVGaWxlczogWycqKi8uKicsICcqKi8qLnRlc3Que2pzLGpzeCx0cyx0c3h9J10sXG4gICAgICBzZXJ2ZXJNb2R1bGVGb3JtYXQ6IFwiZXNtXCIsXG5cbiAgICAgIHJvdXRlczogYXN5bmMgKGRlZmluZVJvdXRlcykgPT4ge1xuICAgICAgICByZXR1cm4gZmxhdFJvdXRlcyhcInJvdXRlc1wiLCBkZWZpbmVSb3V0ZXMsIHtcbiAgICAgICAgICBpZ25vcmVkUm91dGVGaWxlczogW1xuICAgICAgICAgICAgXCIuKlwiLFxuICAgICAgICAgICAgXCIqKi8qLmNzc1wiLFxuICAgICAgICAgICAgXCIqKi8qLnRlc3Que2pzLGpzeCx0cyx0c3h9XCIsXG4gICAgICAgICAgICBcIioqL19fKi4qXCIsXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGZvciBzZXJ2ZXItc2lkZSB1dGlsaXRpZXMgeW91IHdhbnQgdG8gY29sb2NhdGUgbmV4dCB0b1xuICAgICAgICAgICAgLy8geW91ciByb3V0ZXMgd2l0aG91dCBtYWtpbmcgYW4gYWRkaXRpb25hbCBkaXJlY3RvcnkuXG4gICAgICAgICAgICAvLyBJZiB5b3UgbmVlZCBhIHJvdXRlIHRoYXQgaW5jbHVkZXMgXCJzZXJ2ZXJcIiBvciBcImNsaWVudFwiIGluIHRoZVxuICAgICAgICAgICAgLy8gZmlsZW5hbWUsIHVzZSB0aGUgZXNjYXBlIGJyYWNrZXRzIGxpa2U6IG15LXJvdXRlLltzZXJ2ZXJdLnRzeFxuICAgICAgICAgICAgLy8gXHQnKiovKi5zZXJ2ZXIuKicsXG4gICAgICAgICAgICAvLyBcdCcqKi8qLmNsaWVudC4qJyxcbiAgICAgICAgICBdLFxuICAgICAgICAgIC8vIFNpbmNlIHByb2Nlc3MuY3dkKCkgaXMgdGhlIHNlcnZlciBkaXJlY3RvcnksIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgcGF0aCB0byByZW1peCBwcm9qZWN0XG4gICAgICAgICAgYXBwRGlyOiByZXNvbHZlKF9fZGlybmFtZSwgXCJhcHBcIiksXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtVCxTQUFTLGNBQWMsYUFBYTtBQUN2VixTQUFTLHNCQUFzQjtBQUMvQixTQUFTLGVBQWU7QUFDeEIsU0FBUyxrQkFBa0I7QUFDM0IsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxtQkFBbUI7QUFMMUIsSUFBTSxtQ0FBbUM7QUFPekMsSUFBTSxPQUFPLFFBQVEsSUFBSTtBQUN6QixlQUFlO0FBRWYsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1Asa0JBQWtCO0FBQUEsRUFDcEI7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFdBQVcsU0FBUztBQUFBLElBQ3BCLFdBQVc7QUFBQSxJQUNYLGlCQUFpQjtBQUFBLE1BQ2YsU0FBUyxDQUFDLFlBQVksV0FBVyxjQUFjO0FBQUEsSUFDakQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFJUCxjQUFjLENBQUMsQ0FBQztBQUFBLElBQ2hCLE1BQU07QUFBQSxNQUNKLG1CQUFtQixDQUFDLE1BQU07QUFBQSxNQUMxQixRQUFRO0FBQUEsUUFDTixtQkFBbUI7QUFBQSxNQUNyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNQSxvQkFBb0I7QUFBQSxNQUVwQixRQUFRLE9BQU8saUJBQWlCO0FBQzlCLGVBQU8sV0FBVyxVQUFVLGNBQWM7QUFBQSxVQUN4QyxtQkFBbUI7QUFBQSxZQUNqQjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBT0Y7QUFBQTtBQUFBLFVBRUEsUUFBUSxRQUFRLGtDQUFXLEtBQUs7QUFBQSxRQUNsQyxDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
