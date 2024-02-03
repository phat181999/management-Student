import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client';
  items: any[] | undefined;
  constructor() {}

  ngOnInit() {
    this.items = [
      { label: 'Classes', icon: 'pi pi-home', routerLink: '/classes' },
      { label: 'Teachers', icon: 'pi pi-user', routerLink: '/teachers' },
      { label: 'Students', icon: 'pi pi-user', routerLink: '/students' },
    ];
  }
}
