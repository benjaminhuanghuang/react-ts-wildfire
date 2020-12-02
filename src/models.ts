export interface Geometry {
  date: string;
  type: string;
  coordinates: number[];
}
export interface Category {
  id: number;
  title: string;
}
export interface Event {
  id: number;
  title: string;
  geometries: Geometry[];
  categories: Category[];
}

export interface LocationInfo {
  id: number;
  title: string;
}
