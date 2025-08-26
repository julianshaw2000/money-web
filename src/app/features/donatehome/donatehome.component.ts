import { Component, OnInit } from '@angular/core';
import { SharedMaterialModule } from '../../shared-material.module';
import { DonateactionComponent } from '../donateaction/donateaction.component';

@Component({
  selector: 'app-donatehome',
  templateUrl: './donatehome.component.html',
  styleUrls: ['./donatehome.component.css'],
  // styleUrls: ['./donatehome.component.scss'],
  imports: [SharedMaterialModule, DonateactionComponent],
})
export class DonatehomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
