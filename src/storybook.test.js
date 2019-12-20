/* import * as path from 'path';
import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';

initStoryshots({
  framework: 'angular',
  configPath: path.join(__dirname, '../.storybook'),
  test: multiSnapshotWithOptions(),
}); */
import registerRequireContextHook from 'babel-plugin-require-context-hook/register';
import initStoryshots from '@storybook/addon-storyshots';

registerRequireContextHook();
initStoryshots();