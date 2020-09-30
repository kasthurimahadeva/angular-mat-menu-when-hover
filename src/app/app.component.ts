import { Component, OnInit, ViewChild } from '@angular/core';
import {MatMenuTrigger} from '@angular/material';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  @ViewChild(MatMenuTrigger, {static: false}) trigger: MatMenuTrigger;
  recheckIfInMenu: boolean;

  ngOnInit() {
    this.recheckIfInMenu = false;
  }

  openResourceMenu() {
    this.trigger.openMenu();
  }

  closeResourceMenu() {
    setTimeout(() => {
      if (this.recheckIfInMenu === false) {
        this.trigger.closeMenu();
      }
    }, 175);
  }

}
