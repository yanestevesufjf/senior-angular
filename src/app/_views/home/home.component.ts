import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  _var = "placeholder-email"
  _email = '';
  constructor() { }

  ngOnInit(): void {
    /**
     * 
     */
    // document.getElementById('...')?.textContent = "..."
  }

  mostrarEmail() {
    alert(this._email)
  }

  calcular(event: any) {
    console.log(event)
  }

  keyPress(event: any) {
    console.log('keypress')
    console.log(event)
  }

}
