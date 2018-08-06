import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.removeClass(document.body, 'login-page');
    this.renderer.addClass(document.body, 'skin-blue');
    this.renderer.addClass(document.body, 'sidebar-mini');
    this.renderer.addClass(document.body, 'fixed');
  }

}
