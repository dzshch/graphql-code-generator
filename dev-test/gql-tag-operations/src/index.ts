/* eslint-disable @typescript-eslint/no-unused-vars */

import { gql, DocumentType } from '../gql.js';

const BarQuery = gql(/* GraphQL */ `
  query Bar {
    Tweets {
      ...Lel
    }
  }
`);

const doSth = (params: { lel: DocumentType<typeof LelFragment> }) => {
  params.lel.id;
};
