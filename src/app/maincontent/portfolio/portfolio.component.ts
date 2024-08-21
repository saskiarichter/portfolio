import { Component } from '@angular/core';
import { ProjectLeftComponent } from './project-left/project-left.component';
import { ProjectRightComponent } from './project-right/project-right.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectLeftComponent, ProjectRightComponent, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  join: string = '';
  polloloco: string = '';
  pokedex: string = '';

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    this.setTranslations();
    this.translate.onLangChange.subscribe(() => {
      this.setTranslations();
    });
  }

  private setTranslations() {
    this.translate.get('PORTFOLIO.join').subscribe((translated: string) => {
      this.join = translated;
    });
    this.translate.get('PORTFOLIO.polloloco').subscribe((translated: string) => {
      this.polloloco = translated;
    });
    this.translate.get('PORTFOLIO.pokedex').subscribe((translated: string) => {
      this.pokedex = translated;
    });
  }
}
