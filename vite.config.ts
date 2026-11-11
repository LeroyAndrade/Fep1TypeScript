import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
    resolve: {
        alias: {
            "@rootPath": fileURLToPath(new URL("./", import.meta.url)),
            "@webpagina": fileURLToPath(new URL("./src/view/pages", import.meta.url)),
            "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
            "@interfaces": fileURLToPath(new URL("./src/interfaces", import.meta.url)),
            "@services": fileURLToPath(new URL("./src/services", import.meta.url)),
            "@rekeningService": fileURLToPath(new URL("./src/services/Rekening", import.meta.url)),
            "@userService": fileURLToPath(new URL("./src/services/User", import.meta.url))
        }
    }
});