import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.removeClass(document.body, 'register-page');
    this.renderer.removeClass(document.body, 'skin-blue');
    this.renderer.removeClass(document.body, 'sidebar-mini');
    this.renderer.addClass(document.body, 'login-page');
    this.renderer.addClass(document.body, 'hold-transition');
  }

}
