import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  imports: [CommonModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.scss',
   host: { ngSkipHydration: '' }
})
export class ControlFlow {
  isLoggedIn = true;

   users = [
    { id: 1, name: 'Sreelakshmi', role: 'admin' },
    { id: 2, name: 'Anu', role: 'editor' },
    { id: 3, name: 'Raj', role: 'viewer' }
  ];

    selectedRole: string = 'editor';

    toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }

    changeRole(role: string) {
    this.selectedRole = role;
  }

}
