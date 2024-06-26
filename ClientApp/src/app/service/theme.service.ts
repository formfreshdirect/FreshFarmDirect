import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

interface Theme {
  backgroundColor: string;
  textColor: string;
  accentColor: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }
  private themes: { [key: string]: Theme } = {
    'Forest Harmony': {
      backgroundColor: '#228B22',
      textColor: '#FFFFFF',
      accentColor: '#FFD700'
    },
    'Earth & Sky': {
      backgroundColor: '#8B4513',
      textColor: '#F5F5DC',
      accentColor: '#87CEEB'
    },
    'Sunny Fields': {
      backgroundColor: '#FFD700',
      textColor: '#8B4513',
      accentColor: '#228B22'
    },
    'Fresh Growth': {
      backgroundColor: '#32CD32',
      textColor: '#FFFFFF',
      accentColor: '#654321'
    },
    'Nature’s Palette': {
      backgroundColor: '#556B2F',
      textColor: '#FFFFE0',
      accentColor: '#FF8C00'
    }
  };
  private themeSubject = new BehaviorSubject<Theme>(this.themes['Earth & Sky']);
  theme$ = this.themeSubject.asObservable();

  setTheme(themeName: string) {
    if (this.themes[themeName]) {
      this.themeSubject.next(this.themes[themeName]);
    }
  }
}
