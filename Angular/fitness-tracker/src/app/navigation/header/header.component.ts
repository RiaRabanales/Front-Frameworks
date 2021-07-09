import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>(); //void porque no planeo eminit un payload con el evento

  constructor() { }

  ngOnInit(): void {
  }

  //emito un custom event en el header, al que escucho en app-component para cerrar el sidenav
  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

}
