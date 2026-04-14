export interface ShopItem {
  name: string;
  price: string;
  details?: string;
  imageName: string;
}

export interface ShopCategory {
  id: string;
  title: string;
  items: ShopItem[];
}