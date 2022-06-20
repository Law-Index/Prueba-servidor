import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-caja-uno',
  templateUrl: './caja-uno.component.html',
  styleUrls: ['./caja-uno.component.css']
})
export class CajaUnoComponent implements OnInit {

  chisterecibido:any=""

  constructor(private infoDeServicio:ServicioService) {

    infoDeServicio.chisteramdom().subscribe((data:any)=>{
      this.chisterecibido=data.value
   })

  }

  refrescarChiste() {
    this.infoDeServicio.chisteramdom().subscribe((data:any)=>{
      this.chisterecibido=data.value
    })
  }



  ngOnInit(): void {
  }

}
