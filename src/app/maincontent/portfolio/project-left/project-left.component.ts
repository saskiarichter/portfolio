import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-left',
  standalone: true,
  imports: [],
  templateUrl: './project-left.component.html',
  styleUrl: './project-left.component.scss'
})
export class ProjectLeftComponent {

@Input()projectTitle = '';
@Input()projectSkills = '';
@Input()projectDescription = '';
@Input()projectImage = '';
@Input()projectLink = '';
@Input()projectGithub = '';

}
