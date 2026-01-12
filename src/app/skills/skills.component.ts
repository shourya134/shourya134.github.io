import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Expert',
      rating: 85,
      icon: 'bxl-angular'
    },
    {
      name: 'Python',
      level: 'Expert',
      rating: 90,
      icon: 'bxl-python'
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Intermediate',
      rating: 75,
      icon: 'bxl-javascript'
    },
    {
      name: 'JAVA',
      level: 'Expert',
      rating: 80,
      icon: 'bxl-java'
    },
    {
      name: 'C/C++',
      level: 'Intermediate',
      rating: 70,
      icon: 'bxl-c-plus-plus'
    },
    {
      name: 'SQL',
      level: 'Intermediate',
      rating: 75,
      icon: 'bx-data'
    }

  ];
  constructor() { }

  ngOnInit(): void { }

}

interface Skill {
  name: string;
  level: string;
  rating: number;
  icon: string;
}