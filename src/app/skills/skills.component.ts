import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills: Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    let skill1 = {
      description: "Analisis"
    }

    let skill2 = {
      description: "Desarrollo Web"
    }

    let skill3 = {
      description: "Optimismo"
    }

    let skill4 = {
      description: "Empatia"
    }

    let skill5 = {
      description: "Comunicacion"
    }

    let skill6 = {
      description: "Discernimiento"
    }

    let skill7 = {
      description: "Creatividad"
    }

    this.skills.push(skill1);
    this.skills.push(skill2);
    this.skills.push(skill3);
    this.skills.push(skill4);
    this.skills.push(skill5);
    this.skills.push(skill6);
    this.skills.push(skill7);
    console.log(this.skills);
  }
}