import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-impact',
  templateUrl: './impact.component.html',
  styleUrls: ['./impact.component.css'],
  standalone: true,
  imports: [MatButtonModule]
})
export class ImpactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
