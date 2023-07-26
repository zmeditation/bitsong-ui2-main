import "vuetify/styles";
import { createVuetify, ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";

// @ts-ignore
import colors from "vuetify/lib/util/colors";

export default defineNuxtPlugin((nuxtApp) => {
  const mainnetDark: ThemeDefinition = {
    dark: true,
    colors: {
      primary: colors.pink.accent2, // dark deep purple
      secondary: colors.blue.base, // blue
    },
  };

  const testnetDark: ThemeDefinition = {
    dark: true,
    colors: {
      primary: colors.green.base, // dark deep purple
      secondary: colors.blue.base, // blue
    },
  };

  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "testnetDark",
      themes: {
        testnetDark,
        mainnetDark,
      },
    },
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
