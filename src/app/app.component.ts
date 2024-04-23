import { CUSTOM_ELEMENTS_SCHEMA, Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageSelectorComponent } from './image-selector/image-selector.component';
import { SelectedImageComponent } from './selected-image/selected-image.component';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, MatSelectModule, ImageSelectorComponent,SelectedImageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'image-selector';
  selectedImage: any; // Variable to store the selected image

  onImageSelected(image: any) {
    this.selectedImage = image; // Set the selected image received from child component
  }
}


