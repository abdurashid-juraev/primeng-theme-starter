import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

import { ThemeService } from '../../core/service/theme-service';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { InputText } from 'primeng/inputtext';
import { DatePicker } from 'primeng/datepicker';
import { TableModule } from 'primeng/table';
import { Avatar } from 'primeng/avatar';
import { FloatLabel } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-showcase',
  imports: [FormsModule, Button, Card, InputText, DatePicker, TableModule, Avatar, FloatLabel],
  templateUrl: './test-showcase.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestShowcaseComponent {
  themeService = inject(ThemeService);

  username = signal('');
  date = signal<Date | null>(null);

  products = [
    { code: 'f230fh0g3', name: 'Bamboo Watch', category: 'Accessories', quantity: 24 },
    { code: 'nvklal433', name: 'Black Watch', category: 'Accessories', quantity: 61 },
    { code: 'zz21ff34c', name: 'Blue Band', category: 'Fitness', quantity: 2 },
    { code: '244wzx215', name: 'Blue T-Shirt', category: 'Clothing', quantity: 25 },
  ];
}
