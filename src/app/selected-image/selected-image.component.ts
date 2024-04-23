import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selected-image',
  standalone: true,
  imports: [],
  templateUrl: './selected-image.component.html',
  styleUrl: './selected-image.component.scss',
})
export class SelectedImageComponent {
  @Input() selectedImage: any;
}
