import S from '@sanity/desk-tool/structure-builder';

import { BiBookContent } from 'react-icons/bi';

export const PageMenuItem = S.listItem()
  .title('Page Template')
  .icon(BiBookContent)
  .child(S.documentTypeList('page'));
