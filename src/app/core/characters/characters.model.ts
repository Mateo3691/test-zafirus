export interface MarvelCharacter {
    id: number;
    name: string;
    description: string;
    modified: string;
    resourceURI: string;
    urls: {
      type: string;
      url: string;
    }[];
    thumbnail: {
      path: string;
      extension: string;
    };
    comics: ResourceList;
    series: ResourceList;
    stories: ResourceList;
    events: ResourceList;
  }
  
  export interface ResourceList {
    available: number;
    collectionURI: string;
    items: any[];
    returned: number;
  }