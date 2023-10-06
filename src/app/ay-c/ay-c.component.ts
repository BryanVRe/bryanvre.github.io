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
    let a4 = {
      nombreAC: "Pandas",
      fecha: "2023",
      descripcion: "Curso de Pandas en Kaggle",
      direccionWeb: "https://raw.githubusercontent.com/BryanVRe/curses/master/curso-pandas/Bryan%20Valerio%20Reyes%20-%20Pandas.png"
    };
    let a5 = {
      nombreAC: "Python",
      fecha: "2023",
      descripcion: "Curso de Python en Kaggle",
      direccionWeb: "https://raw.githubusercontent.com/BryanVRe/curses/master/curso-python/Bryan%20Valerio%20Reyes%20-%20Python.png"
    };
    this.ayc.push(a);
    this.ayc.push(a1);
    this.ayc.push(a2);
    this.ayc.push(a3);
    this.ayc.push(a4);
    this.ayc.push(a5);
  }

}
