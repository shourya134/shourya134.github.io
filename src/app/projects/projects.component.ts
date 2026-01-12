import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Projective Dynamics Implementation',
      technologies: 'Finite Element Method, Object Oriented Programming, Python',
      description: [
        'Implemented a physics-based engine using OOP for structuring finite element method to simulate a flag under varying wind speeds and directions. As a result, learned how to build fast interactive simulations.',
        'Gained experience translating physical laws into efficient code thoroughly as summarized in the paper https://vvww.projectivedynamics.org/projectivedynamics.pdf'
      ],
      icon: 'bx-atom'
    },

    {
      title: 'Cross Correlation and spectral analysis of earth quakes in Python ',
      technologies: 'Python, Fourier Transformation, Data Visualization',
      description: [
        'Built an experiment using seismographic data to check if bit converted cross correlation preserves phase information while compared to true cross correlation. Furthermore, used seismographic data to identify the normal modes of the earthquakes using power spectrum and Fourier transformations',
        'Computed Cross Correlation of park Hill and Mammoth Lake seismograms using Fourier transformation and regressed the data as a function of frequency and compared it to bit converter cross correlation to find out most the 2 graphs represent completely different trends even though bit conversion is often used for cross correlation(Green\'s function method)',
        'Computed the Power spectrum from the raw data. Thereafter, removed its trend to objectively identify normal modes of the power spectrum to objectively focus on the seismic effects of the earthquake itself.'
      ],
      icon: 'bx-pulse'
    },
    {
      title: 'Implemented a bank teller in JAVA ',
      technologies: 'Java, Kotlin',
      description: [
        'Developed a betting suggestion system based on NBA player real time stats using JASON API',
        'Used Polymorphism for code reusability and inheritance to create a single bank operator and extended those features depending on who is using the bank teller',
        'Used The MVC design pattern as a team and personally took care of the view and controller parts of the design. For the model object-oriented principles were used.'
      ],
      icon: 'bxs-bank'
    },
    {
      title: 'Developed games in Android studio code JAVA ',
      technologies: 'Android Studio, Java, Kotlin',
      description: [
        "Built a 2-player pawn race game on a chessboard. Where the player gets into the opponent's end of the board with only pawn movements. Pawns were the objects around which all the features were oriented",
        'Designed an artificial intelligence for the single-player version with varying difficulty levels with the use of decision trees. For quality assurance used unit testing and the debugger.',
        'Learned how to work with a team using GIT version control and gained interpersonal skills through efficient communication. ',
        'Suggested and implemented creative solutions through a fresh perspective '
      ],
      icon: 'bx-joystick'
    },
    {
      title: 'Image recognition algorithm',
      technologies: 'C,KNN,Parallel Programming',
      description: ['Devised a k-nearest neighbor(knn) based machine learning algorithms that recognized handwriting through image processing ',
        'Accelerated, the knn algorithm through parallel processing that speeds up the algorithm by a factor of number of cores in the CPU in which the algorithm is run'

      ],
      icon: 'bx-scan'
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  getTechnologies(techString: string): string[] {
    return techString.split(',').map(tech => tech.trim());
  }

}
interface Project {
  title: string;
  technologies: string;
  description: string[];
  icon: string;
}