import { Component } from '@angular/core';

@Component({
  // Must be at least two words
  selector: 'app-header',

  // Indicates that this component is self-contained and doesn't require a module
  standalone: true,

  // Specifies the template file for the component's view
  templateUrl: './header.component.html',

  // Links the component to its CSS stylesheet
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
