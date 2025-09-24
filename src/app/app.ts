import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ControlFlow } from './control-flow/control-flow';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ControlFlow],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-17');
}
