import { Component } from '@angular/core';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StartpageComponent } from './startpage/startpage.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [StartpageComponent, AboutmeComponent, SkillsComponent, PortfolioComponent, ContactComponent],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.scss'
})
export class MaincontentComponent {

}
