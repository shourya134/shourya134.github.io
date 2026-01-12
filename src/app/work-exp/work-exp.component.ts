import { Component } from '@angular/core';

@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.css']
})
export class WorkExpComponent {
  experience_list: experience[] = [
    {
      company_name: 'Victoria University Emerging Technologies and the Arts Lab',
      title: 'Research Assistant (Machine Learning and Data Engineer)',
      duration: 'October 2022 – Present',
      location: 'Toronto, ON',
      technologies: 'Python, PyTorch, SK-learn, SQL, JavaScript, RAG, LLM, Semantic Similarity, JSON',
      description: [
        'Spearheading the field of Generative A.I. Governance by developing detection systems for LLM jailbreak attacks, including crescendo, many-shot, and multi-turn manipulation techniques, achieving measurable reductions in Attack Success Rates.',
        'Designed a qualitative evaluation framework to measure Attack Compliance, utilizing semantic similarity detection. Used F-1 scores to quantify enforcement efficacy against adversarial threats. Stored the results in JSON files for ease of access and management.',
        'Implemented safety guardrails for RAG pipelines, establishing checkpoints at retrieval and generation phases to detect and mitigate prompt injection attacks.',
        'Contributed key insights to postdoctoral fellows on Virtual reality & perception, Autism Chat-bot, and Sonification projects.',
        'Collaborated with cross-functional teams to develop the ETAL website, utilizing SQL and JavaScript to manage data securely on University Library servers.'
      ],
    },
    {
      company_name: 'Victoria University Communications and IT Department',
      title: 'Web Developer',
      duration: 'June 2024 – October 2024',
      location: 'Toronto, ON',
      technologies: 'JavaScript, Node.js, React.js, Express.js, PostgreSQL, AWS EC2, ETL',
      description: [
        'Built an API based Dynamic Web Application for the Victoria College dining hall and cafe alongside a cross-functional team that helped me design, deploy, and efficiently manage the rotation of 93 distinct menus.',
        'Devised ETL data pipelines to extract and cleanse data from PDF menus, storing it in PostgreSQL for streamlined data management and access.',
        'Leveraged JavaScript to build robust back-end functionality. Used Node.js for environment setup, testing, and debugging. Incorporated React.js for an engaging front-end experience.',
        'Deployed the application with Express.js on AWS EC2 server for efficient and cost-effective server performance.'
      ],
    },
    {
      company_name: 'University Of Toronto',
      title: 'Data Scientist',
      duration: 'October 2022 – May 2024',
      location: 'Toronto, ON',
      technologies: 'Python, Unity, C#, Microsoft SQL Server, NLP, PyTorch, SK-learn, Pandas, NumPy, Matplotlib, Power BI, Scipy, NVivo',
      description: [
        'Researched and published the cognitive effects of virtual-reality simulations, built in Unity and C#, on over 80 participants in an educational institution focusing on impact measurement and communication.',
        'Led data collection, thematization, and mining in Microsoft SQL server with over 1000 queries for video and audio qualitative data analysis.',
        'Accelerated audio transcription and speaker diarization of the interviews by 12 percent using a Python-based NLP machine learning model in collaboration with Nvidia Open Source, PyTorch, SK-learn, and Microsoft Excel for data exploration and audio analysis.',
        'Analyzed 3 varieties of bio-statistical data from over 80 virtual reality participants using time series analysis and predictive modeling to mitigate bias. Used Pandas and NumPy for data manipulation, Matplotlib and Power BI to visualize the model, and Scipy for quantitative data analysis and transformation.',
        'Conducted qualitative data collection analysis and visualization of video and audio data on NVivo.'
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}

}
interface experience {
  company_name: string;
  title: string;
  duration: string;
  location: string;
  technologies: string;
  description: string[];
}