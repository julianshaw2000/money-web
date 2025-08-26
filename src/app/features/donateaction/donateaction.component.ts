import { Component, OnInit } from '@angular/core';
import { SharedMaterialModule } from '../../shared-material.module';

@Component({
  selector: 'app-donateaction',
  templateUrl: './donateaction.component.html',
  styleUrls: ['./donateaction.component.scss'],
  imports: [SharedMaterialModule]
})
export class DonateactionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
