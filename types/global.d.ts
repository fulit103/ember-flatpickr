import { default as _flatpickr, confirmDatePlugin as _confirmDatePlugin, quickSelectOptionsPlugin as _quickSelectOptionsPlugin } from 'flatpickr';

// Types for compiled templates
// declare module 'ember-flatpickr/templates/*' {
//   import { TemplateFactory } from 'htmlbars-inline-precompile';
//   const tmpl: TemplateFactory;
//   export default tmpl;
// }

declare global {
  const flatpickr: typeof _flatpickr;
  const confirmDatePlugin: typeof _confirmDatePlugin;
  const quickSelectOptionsPlugin: typeof _quickSelectOptionsPlugin;
}
