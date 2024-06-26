import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../service/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private themeService: ThemeService) { }
  ngOnInit(): void {
  }
  themeNames = ['Forest Harmony', 'Earth & Sky', 'Sunny Fields', 'Fresh Growth', 'Nature’s Palette'];

  onThemeChange(themeName: string) {
    this.themeService.setTheme(themeName);
  }
}
