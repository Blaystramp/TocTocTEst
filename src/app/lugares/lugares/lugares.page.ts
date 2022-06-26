import { Component, OnInit } from '@angular/core';
import { LugarService } from 'src/app/services/lugar.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
})
export class LugaresPage implements OnInit {
  lugares = []

  constructor(private lugarService: LugarService) { }

  ngOnInit() {
    this.lugarService.cargarLugares()
    .subscribe(data =>{
      this.lugares = data
    })
  }

  agregarLugar()
  {}

}
