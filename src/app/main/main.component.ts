import { Component } from '@angular/core';
import { HeadSectionComponent } from './head-section/head-section.component';
import { GithubEmailComponent } from './github-email/github-email.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { JoinComponent } from './join/join.component';
import { PolloLocoComponent } from './pollo-loco/pollo-loco.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactComponent } from './contact/contact.component';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeadSectionComponent,
    GithubEmailComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    JoinComponent,
    PolloLocoComponent,
    PokedexComponent,
    ReviewsComponent,
    ContactComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
