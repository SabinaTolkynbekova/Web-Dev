import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album, AlbumPhotos } from 'src/app/models/models';
import { AlbumsService } from 'src/app/services/albums.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent {
  album!: Album;
  photos!: AlbumPhotos[];
  loaded!: boolean;

  constructor(private route: ActivatedRoute, private location: Location, private albumsService: AlbumsService) {
  }

  ngOnInit(): void {
  	this.getAlbum();
  	this.getPhotos();
  }

  getAlbum() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumsService.getAlbum(id).subscribe((album) => {
        this.album = album;
      });
    });
  }

  getPhotos() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumsService.getAlbumPhotos(id).subscribe((photos) => {
        this.photos = photos;
        this.loaded = true;
      });
    });
  }

  goBack() {
    this.location.back();
  }

}
