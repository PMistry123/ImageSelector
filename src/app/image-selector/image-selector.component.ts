import { Component, EventEmitter, Output } from '@angular/core';
import { IMAGES } from '../image-data';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MatListModule} from '@angular/material/list'
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-image-selector',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule,MatInputModule, MatListModule,HttpClientModule],
  templateUrl: './image-selector.component.html',
  styleUrl: './image-selector.component.scss',
})
export class ImageSelectorComponent {



  constructor(private http: HttpClient) { 

   //  this.getImages()
  }

  // async getImages() {
  //    await this.http.get<string[]>('http://127.0.0.1:3001/images').subscribe({
  //     next: (images) => {
  //       this.images = images;
  //     },
  //     error: (err) => {
  //       console.error('Error fetching images:', err);
  //     }
  //   });
  // }
  images = IMAGES;
  selectedImage: any; // Variable to store selected image
  @Output() imageSelected: EventEmitter<any> = new EventEmitter<any>();
  onImageSelect(image: any) {
    this.selectedImage = image;
    this.imageSelected.emit(image);
  }
}
