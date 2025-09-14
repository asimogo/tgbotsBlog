// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

// Disable specific Vue lint rules here
export default withNuxt({
  name: "local-overrides",
  rules: {
    "vue/html-self-closing": "off",
  },
});
