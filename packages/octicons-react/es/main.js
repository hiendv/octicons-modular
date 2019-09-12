import Octicon from './Octicon';
export { default as Octicon } from './Octicon';
export * from 'octicons-modular';
import * as octiconsModular from 'octicons-modular';
export { octiconsModular as Octicons };

function styleInject(css, ref) {
  if ( ref === void 0 ) { ref = {}; }
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".octicon{display:inline-block;vertical-align:text-top;fill:currentColor}";
styleInject(css);

export default Octicon;
