import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import { Files } from 'lucide-react';

export const structure = (S: any, context: any) =>
  S.list()
    .title('Content')
    .items([
      orderableDocumentListDeskItem({
        type: 'page',
        title: 'Pages',
        icon: Files,
        S,
        context,
      }),
      S.divider(),
      // S.listItem()
      //   .title('Navigation')
      //   .icon(Menu)
      //   .child(S.editor().id('navigation').schemaType('navigation').documentId('navigation')),
      // S.listItem()
      //   .title('Settings')
      //   .icon(Settings)
      //   .child(S.editor().id('settings').schemaType('settings').documentId('settings')),
    ]);
