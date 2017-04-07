// We need to import the "mocha.js" file specifically because that is the browser entry point.
import 'mocha/mocha.js';
import 'mocha-teamcity-reporter/lib/teamcity.js';

// This defines "describe", "it", etc.
mocha.setup({
  ui: 'bdd',
});

export { mocha };
