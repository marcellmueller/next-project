import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Documents
import page from './page/page';
import pageHome from './page/page-home';
import person from './documents/person';
import post from './documents/post';
import settingsFooter from './page/settings-footer';
import settingsGeneral from './page/settings-general';
import settingsHeader from './page/settings-header';

// Types
import blockContent from './types/blockContent';
import blockContentSimple from './types/blockContentSimple';
import flickerText from './modules/flickerText';
import headline from './modules/headline';
import link from './types/link';

export default createSchema({
  // We name our schema
  name: 'default',

  types: schemaTypes.concat([
    // Documents
    page,
    pageHome,
    person,
    post,
    settingsFooter,
    settingsHeader,
    settingsGeneral,

    // Types
    blockContent,
    blockContentSimple,
    flickerText,
    headline,
    link,
  ]),
});
