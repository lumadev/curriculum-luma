export interface Project {
  id?: string;
  deploymentUrl?: string;
  tags: string[];
  image: string;
  galleryImages: string[];
  responsibilities?: string[];
  isFavorite?: boolean;
}


