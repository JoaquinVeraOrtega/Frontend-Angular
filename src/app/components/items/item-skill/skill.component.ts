import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skills.model';

@Component({
  selector: 'app-item-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  tituloSkill="Agregar funcionalidad Skill"
  
  skills:Skill[]=[

    new Skill("Angular", 50),
    
    ]
    
    agregarSkill(){
      let mySkill = new Skill(this.nuevaSkill, this.nuevoPorcentaje);
      this.skills.push(mySkill);
    }
    
    nuevaSkill:string = "";
    nuevoPorcentaje:number=0;


  constructor() { }

  ngOnInit(): void {
  }

}
