import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    {
    'icon': './assets/img/angular.svg',
    'skillname': 'Angular',
  },{
    'icon': './assets/img/typescript.svg',
    'skillname': 'TypeScript',
  },{
    'icon': './assets/img/javascript.svg',
    'skillname': 'JavaScript',
  },{
    'icon': './assets/img/html.svg',
    'skillname': 'HTML',
  },{
    'icon': './assets/img/css.svg',
    'skillname': 'CSS',
  },{
    'icon': './assets/img/firebase.svg',
    'skillname': 'Firebase',
  },{
    'icon': './assets/img/git.svg',
    'skillname': 'Git',
  },{
    'icon': './assets/img/scrum.svg',
    'skillname': 'Scrum',
  },{
    'icon': './assets/img/api.svg',
    'skillname': 'Rest-Api',
  },{
    'icon': './assets/img/material.svg',
    'skillname': 'Material Design',
  }
]

}
