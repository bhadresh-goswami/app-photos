import { Component } from '@angular/core';
import { PhotosService } from '../photos.service';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css'],
})
export class PhotoShowComponent {
  photoUrl: string = '';
  constructor(private photosService: PhotosService) {
    this.fetchPhoto();
  }
  fetchOnClick() {
    this.fetchPhoto();
  }
  fetchPhoto() {
    this.photosService.getPhoto().subscribe((photo) => {
      console.log(photo);
      this.photoUrl = photo.urls.regular;
    });
  }
}
