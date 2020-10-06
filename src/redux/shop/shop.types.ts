export type CollectionItemType = {
  id: number,
  name: string,
  imageUrl: string,
  price: number,
  quantity?: number
}

export type CollectionType = {
  id: number,
  title: string,
  routeName: string,
  items: CollectionItemType[]
}

export interface ShopState {
  collections: {
    [key: string]: CollectionType;
  }
}