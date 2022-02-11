import S from '@sanity/desk-tool/structure-builder';

import {
  HomeMenuItem,
  PageMenuItem,
  PageSettingsMenuItem,
  PostsMenuItem,
  ProjectMenuItem,
  SettingsMenuItem,
} from './structure/index';

export default () =>
  S.list()
    .title('Content')
    .items([
      HomeMenuItem,
      PageMenuItem,
      PageSettingsMenuItem,
      PostsMenuItem,
      ProjectMenuItem,
      SettingsMenuItem,
    ]);
