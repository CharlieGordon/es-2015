import Reveal from 'reveal.js';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/solarized.css';
import './theme.css';
import './controls.css';

hljs.registerLanguage('javascript', javascript);

const presentation = new Reveal({
  hash: true,
  margin: 0.1,
  controlsTutorial: false,
  controlsBackArrows: 'visible',
});

presentation.initialize().then(() => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block);
  });
});
