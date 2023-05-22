import { startCase } from "lodash";

export const TABLE_COLUMNS = ['title',  'openingCrawl', 'director', 'canon', 'planets', 'species', 'starships', 'vehicles'] as const;

export const smallHeaderIds = ['canon'];
export const largeHeaderIds = ['openingCrawl'];

export const ellipsis: any = {
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
};

export const transformColumnName = (colId: string) => {
  let result = colId;
  switch (colId) {
    case "openingCrawl": {
      result = 'Opening Crawl';
      break;
    }
    default: {
      result = startCase(colId);
    }
  }
  return result;
};