import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList: Education[] = [
    {
      institute: "University of Toronto",
      course: 'B.Sc Computer Science And Mathematics',
      duration: 'Toronto, ON',
      score: '',
      courses: [
        'Time Series Analysis',
        'Computational Physics',
        'Multi-variable Calculus',
        'Physics-based Animation',
        'Databases',
        'Machine Learning',
        'Data structures and algorithms',
        'Operating Systems',
        'Advanced Linear Algebra',
        'System Design'
      ]
    }
  ];

  constructor() {}

  ngOnInit(): void {}

}
interface Education {
  institute: string;
  course: string;
  duration: string;
  score: string;
  courses?: string[];
}
