import S from '@sanity/desk-tool/structure-builder';

import { BiWrench } from 'react-icons/bi';

export const ProjectMenuItem = S.listItem()
  .title('Projects')
  .icon(BiWrench)
  .child(S.documentTypeList('project'));
