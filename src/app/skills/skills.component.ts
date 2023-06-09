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
    },
    {
      name: 'Python',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Intermidiate',
      rating: 75,
    },
    {
      name: 'JAVA',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'C/C++',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'SQL',
      level: 'Intermidiate',
      rating: 75
    }

  ];
  constructor() {}

  ngOnInit(): void {}

}

interface Skill {
  name: string;
  level: string;
  rating: number;
}