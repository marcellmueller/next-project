import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Documents
import page from './page/page';
import pageAbout from './page/page-about';
import pageContact from './page/page-contact';
import pageHome from './page/page-home';
import pageProjects from './page/page-projects';
import person from './documents/person';
import post from './documents/post';
import project from './documents/project';
import settingsFooter from './page/settings-footer';
import settingsGeneral from './page/settings-general';
import settingsHeader from './page/settings-header';

// Types
import blockContent from './types/blockContent';
import link from './types/link';

export default createSchema({
  // We name our schema
  name: 'default',

  types: schemaTypes.concat([
    // Documents
    page,
    pageAbout,
    pageContact,
    pageHome,
    pageProjects,
    person,
    post,
    project,
    settingsFooter,
    settingsHeader,
    settingsGeneral,

    // Types
    blockContent,
    link,
  ]),
});
