import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-route-links',
  templateUrl: './route-links.component.html',
  styleUrls: ['./route-links.component.css']
})
export class RouteLinksComponent implements OnInit {
  @Input() routes
  @Input() prefix
  constructor() { }

  ngOnInit() {
  }

}
