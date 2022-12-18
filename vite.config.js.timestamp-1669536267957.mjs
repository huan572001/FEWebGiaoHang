// vite.config.js
import { defineConfig } from "file:///D:/template/antd-vite-tail/node_modules/vite/dist/node/index.js";
import react from "file:///D:/template/antd-vite-tail/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import styleImport from "file:///D:/template/antd-vite-tail/node_modules/vite-plugin-style-import/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\template\\antd-vite-tail";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@": path.join(__vite_injected_original_dirname, "src")
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: { "@primary-color": "#13c2c2" }
      }
    },
    modules: {
      localsConvention: "camelCase"
    }
  },
  plugins: [
    react(),
    styleImport({
      libs: [
        {
          libraryName: "antd",
          esModule: true,
          resolveStyle: (name) => {
            return `antd/es/${name}/style/index`;
          }
        }
      ]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx0ZW1wbGF0ZVxcXFxhbnRkLXZpdGUtdGFpbFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcdGVtcGxhdGVcXFxcYW50ZC12aXRlLXRhaWxcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3RlbXBsYXRlL2FudGQtdml0ZS10YWlsL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgc3R5bGVJbXBvcnQgZnJvbSAndml0ZS1wbHVnaW4tc3R5bGUtaW1wb3J0JztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnc3JjJyksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY3NzOiB7XHJcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XHJcbiAgICAgIGxlc3M6IHtcclxuICAgICAgICBqYXZhc2NyaXB0RW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICBtb2RpZnlWYXJzOiB7ICdAcHJpbWFyeS1jb2xvcic6ICcjMTNjMmMyJyB9LFxyXG4gICAgICB9LFxyXG4gICAgICAvLyAuLi4uXHJcbiAgICB9LFxyXG4gICAgbW9kdWxlczoge1xyXG4gICAgICBsb2NhbHNDb252ZW50aW9uOiAnY2FtZWxDYXNlJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgc3R5bGVJbXBvcnQoe1xyXG4gICAgICBsaWJzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGlicmFyeU5hbWU6ICdhbnRkJyxcclxuICAgICAgICAgIGVzTW9kdWxlOiB0cnVlLFxyXG4gICAgICAgICAgcmVzb2x2ZVN0eWxlOiAobmFtZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYGFudGQvZXMvJHtuYW1lfS9zdHlsZS9pbmRleGA7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9KSxcclxuICBdLFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzUSxTQUFTLG9CQUFvQjtBQUNuUyxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8saUJBQWlCO0FBSHhCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxLQUFLLGtDQUFXLEtBQUs7QUFBQSxJQUNqQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLG1CQUFtQjtBQUFBLFFBQ25CLFlBQVksRUFBRSxrQkFBa0IsVUFBVTtBQUFBLE1BQzVDO0FBQUEsSUFFRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1Asa0JBQWtCO0FBQUEsSUFDcEI7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsTUFDVixNQUFNO0FBQUEsUUFDSjtBQUFBLFVBQ0UsYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFVBQ1YsY0FBYyxDQUFDLFNBQVM7QUFDdEIsbUJBQU8sV0FBVztBQUFBLFVBQ3BCO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
