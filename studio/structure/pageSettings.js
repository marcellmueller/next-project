import S from '@sanity/desk-tool/structure-builder';

import { BiBookContent, BiEnvelope } from 'react-icons/bi';

export const PageSettingsMenuItem = S.listItem()
  .title('Page Settings')
  .icon(BiBookContent)
  .child(
    S.list()
      .title('Page Settings')
      .items([
        S.listItem()
          .title('About')
          .icon(BiBookContent)
          .child(S.editor().schemaType('pageAbout').documentId('pageAbout')),
        S.listItem()
          .title('Contact')
          .icon(BiEnvelope)
          .child(
            S.editor().schemaType('pageContact').documentId('pageContact')
          ),
        S.listItem()
          .title('Projects')
          .icon(BiBookContent)
          .child(
            S.editor().schemaType('pageProjects').documentId('pageProjects')
          ),
      ])
  );
