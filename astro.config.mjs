import { defineConfig } from "astro/config";
import angular from "@analogjs/astro-angular";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    angular({
      vite: {
        inlineStylesExtension: "scss",
      },
    }),
    starlight({
      title: "doc by Portail",
      customCss: ["@angular/cdk/overlay-prebuilt.css"],
      sidebar: [
        {
          label: "AFDs",
          // Autogenerate a group of links for the 'guides' directory.
          autogenerate: { directory: "AFD" },
        },
      ],
    }),
  ],
});
