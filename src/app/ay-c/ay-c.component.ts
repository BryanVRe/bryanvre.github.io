import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ay-c',
  templateUrl: './ay-c.component.html',
  styleUrls: ['./ay-c.component.css']
})
export class AyCComponent implements OnInit {
  ayc : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let a = {
      nombreAC: "Operador de grua",
      fecha: "2018-2022",
      descripcion:"certificado para operar gruas puente", 
      
    };
    let a1 = {
      nombreAC: "chemical weigher",
      fecha: "2020-2022",
      descripcion:"certificado para manejo de quimicos peligrosos", 
      
    };
    let a2 = {
      nombreAC: "Boeing",
      fecha: "2022",
      descripcion:"para ser arquitecto software se necesita ser ingeniero software", 
      
    };
    let a3 = {
      nombreAC: "Architecture Tradeoff Analysis Method",
      fecha: "2018-2022",
      descripcion:"participar con un tutor en algún equipo de arquitectura.", 
      
    };
    this.ayc.push(a);
    this.ayc.push(a1);
    this.ayc.push(a2);
    this.ayc.push(a3);
  }

}
