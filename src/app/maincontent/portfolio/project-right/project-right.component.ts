import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-right',
  standalone: true,
  imports: [],
  templateUrl: './project-right.component.html',
  styleUrl: './project-right.component.scss'
})
export class ProjectRightComponent {

  @Input() projectTitle = '';
  @Input() projectSkills = '';
  @Input() projectDescription = '';
  @Input() projectImage = '';
  @Input() projectLink = '';
  @Input() projectGithub = '';
}
