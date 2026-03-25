export interface Project {
  id?: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  image: string;
  galleryImages: string[];
  role?: string;
  roleDescription?: string;
  responsibilities?: string[];
  isFavorite?: boolean;
}
