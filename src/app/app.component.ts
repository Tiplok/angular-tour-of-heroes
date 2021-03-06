import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

// Annotation that allow Angular to know that the following class is a component, it is specified his selector, templateUrl and styleUrls
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// To be imported, any declaration must be exported
export class AppComponent {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes = HEROES;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

