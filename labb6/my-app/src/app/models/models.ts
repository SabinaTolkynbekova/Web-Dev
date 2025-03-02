export interface Album {
    id: number;
    title: string;
    body: string;
}
  
export interface AlbumPhotos {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}