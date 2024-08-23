import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-head-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './head-section.component.html',
  styleUrl: './head-section.component.scss'
})
export class HeadSectionComponent {
  scrollToSection() {
    let contactSection = document.getElementById('contact');
    if(contactSection) {
      contactSection.scrollIntoView({behavior: 'smooth'});
    }
  }
  translate = inject(TranslationService);
}
