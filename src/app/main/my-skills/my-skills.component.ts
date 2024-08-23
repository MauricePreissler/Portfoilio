import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  scrollToSection() {
    let contactSection = document.getElementById('contact');
    if(contactSection) {
      contactSection.scrollIntoView({behavior: 'smooth'});
    }
  }
  translate = inject(TranslationService);
}
