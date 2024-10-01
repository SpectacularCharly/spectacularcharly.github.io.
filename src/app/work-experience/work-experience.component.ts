import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  workExperience : Array<any> = [];
work: any;
  ngOnInit(): void {
    let work1 = {
      fecha: "2018-2022",
      ubicacion: "Ixtac Ver.",
      puesto: "CEO",
      empresa: "Waves Lab",
      logros : [
        {descripcion : "Pasarse Halo 1 en legendario}"},
        { descripcion : "Comprarse una figura Hammond Collection del Tiranosaurus"}
      ]
    }
    let work2 = {
      fecha: "2014-2018",
      ubicacion: "Orizaba, Ver.",
      puesto: "Kubeet",
      logros : [
        { descripcion : "Creacion de una pagina de internet sobre peliculas"},
        { descripcion : "Construccion a escala de un robot autonomo: Bonecrusher"}
      ]
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);
    console.log(this.workExperience);
  }
}
