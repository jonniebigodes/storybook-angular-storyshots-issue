import 'jest-preset-angular';
import './globalMocks';
/**
 * workaround for issue with Jest
 * Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.
 */
Object.defineProperty(global, 'Promise', {writable: false, value: global.Promise});
