import S from '@sanity/desk-tool/structure-builder';

import { BiMessageDetail } from 'react-icons/bi';

export const PostsMenuItem = S.listItem()
  .title('Posts')
  .icon(BiMessageDetail)
  .child(S.documentTypeList('post'));
