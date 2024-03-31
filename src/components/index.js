import { createApp } from 'vue/dist/vue.esm-bundler.js';

import EmailEditor from './EmailEditor.vue';
import LandingPageEditor from './LandingPageEditor.vue';

const Components = {
  EmailEditor,
  LandingPageEditor
};

const app = createApp({});

Object.keys(Components).forEach((name) => {
  app.component(name, Components[name]);
});

export { EmailEditor };
export default Components;
