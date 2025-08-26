import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-amount-chips',
  standalone: true,
  imports: [CommonModule, MatChipsModule],
  template: `
    <mat-chip-listbox aria-label="Suggested donation amounts">
      <mat-chip *ngFor="let amount of amounts"
                [class.selected]="amount === selected"
                (click)="selectAmount(amount)">
        £{{ amount / 100 }}
      </mat-chip>
      <mat-chip [class.selected]="selected === 'custom'" (click)="selectAmount('custom')">
        Custom
      </mat-chip>
    </mat-chip-listbox>
  `,
  styles: [`
    mat-chip-list {
      display: flex;
      gap: var(--spacing-sm);
      margin-bottom: var(--spacing-md);
    }
    mat-chip {
      cursor: pointer;
      font-size: 1rem;
      background: #f5f5f5;
      border: 1px solid transparent;
      transition: background 0.2s, border 0.2s;
    }
    mat-chip.selected {
      background: var(--color-primary, #1976d2);
      color: #fff;
      border-color: var(--color-primary, #1976d2);
    }
  `],
})
export class AmountChipsComponent {
  @Input() amounts: number[] = [500, 1000, 2000, 5000]; // in pence
  @Input() selected: number | 'custom' = 1000;
  @Output() selectedChange = new EventEmitter<number | 'custom'>();

  selectAmount(amount: number | 'custom') {
    this.selectedChange.emit(amount);
  }
}
