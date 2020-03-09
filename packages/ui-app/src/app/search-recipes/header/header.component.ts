import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  inputValue = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.inputValue = this.activatedRoute.snapshot.queryParamMap.get('q');
  }

  onEnter(event: any): void {
    this.router.navigate(['recipes/search'], { queryParams: { q: event } });
  }
}
