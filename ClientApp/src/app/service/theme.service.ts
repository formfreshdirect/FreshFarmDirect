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
    },
    'Ocean Breeze': {
      backgroundColor: '#000080',
      textColor: '#FFFFFF',
      accentColor: '#00FFFF'
    },
    'Desert Sands': {
      backgroundColor: '#F4A460',
      textColor: '#8B4513',
      accentColor: '#FFDEAD'
    },
    'Snowy Peaks': {
      backgroundColor: '#FFFAFA',
      textColor: '#191970',
      accentColor: '#E0FFFF'
    },
    'City Lights': {
      backgroundColor: '#000000',
      textColor: '#FFFFFF',
      accentColor: '#7DF9FF'
    },
    'Spring Blossoms': {
      backgroundColor: '#FFB7C5',
      textColor: '#00FF00',
      accentColor: '#FFFAFA'
    },
    'Vintage Wine': {
      backgroundColor: '#800020',
      textColor: '#FFD700',
      accentColor: '#6C2E1F'
    },
    'Starlit Night': {
      backgroundColor: '#2C3E50',
      textColor: '#F0F3F4',
      accentColor: '#D5DBDB'
    },
    'Harvest Fields': {
      backgroundColor: '#F5DEB3',
      textColor: '#DAA520',
      accentColor: '#D2691E'
    },
    'Space Odyssey': {
      backgroundColor: '#000000',
      textColor: '#F0F8FF',
      accentColor: '#002147'
    },
    'Jungle Adventure': {
      backgroundColor: '#17806D',
      textColor: '#6B4423',
      accentColor: '#29AB87'
    },
    'Zen Garden': {
      backgroundColor: '#D2D1C9',
      textColor: '#6B8E23',
      accentColor: '#A1CAF1'
    },
    'Fire and Ice': {
      backgroundColor: '#FF2400',
      textColor: '#87CEEB',
      accentColor: '#FFFFFF'
    },
    'Summer Sunset': {
      backgroundColor: '#FD5E53',
      textColor: '#F6F6F6',
      accentColor: '#47ABCC'
    },
    'Mystic Forest': {
      backgroundColor: '#228B22',
      textColor: '#E6E6FA',
      accentColor: '#B0C4DE'
    },
    'Digital Matrix': {
      backgroundColor: '#101010',
      textColor: '#00FF00',
      accentColor: '#1E90FF'
    },
    'Festival Lights': {
      backgroundColor: '#FF4500',
      textColor: '#FDFDFD',
      accentColor: '#FFD700'
    },
    'Aurora Borealis': {
      backgroundColor: '#39FF14',
      textColor: '#E0FFFF',
      accentColor: '#00BFFF'
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
