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
    },
    'Mountain Mist': {
      backgroundColor: '#B0C4DE',
      textColor: '#333333',
      accentColor: '#4682B4'
    },
    'Desert Oasis': {
      backgroundColor: '#FFE4C4',
      textColor: '#333333',
      accentColor: '#CD853F'
    },
    'Ocean Blue': {
      backgroundColor: '#1E90FF',
      textColor: '#FFFFFF',
      accentColor: '#87CEFA'
    },
    'Autumn Leaves': {
      backgroundColor: '#DC143C',
      textColor: '#FFFFFF',
      accentColor: '#FFA500'
    },
    'Sunset Glow': {
      backgroundColor: '#FF6347',
      textColor: '#FFFFFF',
      accentColor: '#FFD700'
    },
    'Winter Frost': {
      backgroundColor: '#87CEEB',
      textColor: '#333333',
      accentColor: '#F0FFFF'
    },
    'Spring Blossom': {
      backgroundColor: '#7FFFD4',
      textColor: '#333333',
      accentColor: '#FF69B4'
    },
    'Golden Fields': {
      backgroundColor: '#DAA520',
      textColor: '#333333',
      accentColor: '#FFD700'
    },
    'Midnight Sky': {
      backgroundColor: '#191970',
      textColor: '#FFFFFF',
      accentColor: '#4682B4'
    },
    'Crimson Sunset': {
      backgroundColor: '#DC143C',
      textColor: '#FFFFFF',
      accentColor: '#FFD700'
    },
    'Lavender Dreams': {
      backgroundColor: '#E6E6FA',
      textColor: '#333333',
      accentColor: '#BA55D3'
    },
    'Silver Moon': {
      backgroundColor: '#B0C4DE',
      textColor: '#333333',
      accentColor: '#708090'
    },
    'Emerald Isle': {
      backgroundColor: '#2E8B57',
      textColor: '#FFFFFF',
      accentColor: '#ADFF2F'
    },
    'Cherry Blossom': {
      backgroundColor: '#FF69B4',
      textColor: '#FFFFFF',
      accentColor: '#FF1493'
    },
    'Azure Sky': {
      backgroundColor: '#F0FFFF',
      textColor: '#333333',
      accentColor: '#87CEEB'
    },
    'Tropical Paradise': {
      backgroundColor: '#00CED1',
      textColor: '#333333',
      accentColor: '#FFD700'
    },
    'Amber Waves': {
      backgroundColor: '#FF7E00',
      textColor: '#FFFFFF',
      accentColor: '#FFD700'
    }
  }
  private themeSubject = new BehaviorSubject<Theme>(this.themes['Azure Sky']);
  theme$ = this.themeSubject.asObservable();

  setTheme(themeName: string) {
    if (this.themes[themeName]) {
      this.themeSubject.next(this.themes[themeName]);
    }
  }
}
