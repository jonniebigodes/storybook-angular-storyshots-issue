import { configure } from "@storybook/angular";
import "../src/assets/index.css";
// automatically import all files ending in *.stories.ts
configure(require.context("../src/app/", true, /\.stories\.ts$/), module);