export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  imageUrl: string;
  plotSize: string;
  builtUpArea?: string;
  constructionPeriod: string;
  description: string;
  materials: string[];
  features?: string[];
  highlights?: string[];
  gallery?: string[];
}
