import S from '@sanity/desk-tool/structure-builder';

import { BiHome } from 'react-icons/bi';

export const HomeMenuItem = S.listItem()
  .title('Home')
  .icon(BiHome)
  .child(S.editor().schemaType('pageHome').documentId('pageHome'));
