import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {
  translate = inject(TranslationService);
  reviews = [
    {
      name: "Bünyamin Tig - Team Partner",
      image: "./assets/img/büny.png",
      discreption: "Maurice always brings an abundance of positive energy to the team. Once he understands a task, he works extremely quickly and confidently. His skills make him an indispensable team player that everyone wants to keep. Additionally, he excels at explaining complex concepts in an understandable way. Maurice is a true asset to any team!",
    },
    {
      name: "Karina Tanei - Team Partner",
      image: "./assets/img/karina.png",
      discreption: "The strength of Maurice is his work speed. One might think that he has more than two arms. When the mood in the team starts to dip, he is the one who can make everyone laugh with his comments or funny pictures. With Maurice on the team, big hurdles suddenly seem quite small. A big thank you to you, Maurice!",
    },
    {
      name: "Roman Kabucov - Team Partner",
      image: "./assets/img/roman.png",
      discreption: "Maurice was an important part of our group project Join. His open and bright nature always contributed to a pleasant group dynamic. He is characterized by his ability to quickly familiarize himself with new subject areas and to complete assigned tasks efficiently. It was a pleasure to have him as part of our team.",
    }
  ];
  i = 0;

  rewiewBack(){
    if(this.i < this.reviews.length - 1) {
      this.i++;
    } else {
      this.i = 0;  // Reset to the first review
    }
  }

  reviewForward(){
    if(this.i > 0) {
      this.i--;
    } else {
      this.i = this.reviews.length - 1;  // Go to the last review
    }
  }
}

