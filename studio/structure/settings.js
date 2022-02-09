import S from '@sanity/desk-tool/structure-builder';

import { BiCog, BiDockBottom, BiDockTop } from 'react-icons/bi';

export const SettingsMenuItem = S.listItem()
  .title('Settings')
  .icon(BiCog)
  .child(
    S.list()
      .title('Settings')
      .items([
        S.listItem()
          .title('Header')
          .icon(BiDockTop)
          .child(
            S.editor().schemaType('settingsHeader').documentId('settingsHeader')
          ),
        S.listItem()
          .title('Footer')
          .icon(BiDockBottom)
          .child(
            S.editor().schemaType('settingsFooter').documentId('settingsFooter')
          ),
        S.listItem()
          .title('General Settings')
          .icon(BiCog)
          .child(
            S.editor()
              .schemaType('settingsGeneral')
              .documentId('settingsGeneral')
          ),
      ])
  );
