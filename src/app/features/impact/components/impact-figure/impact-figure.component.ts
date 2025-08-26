import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-impact-figure',
  standalone: true,
  template: `
    <div class="impact-figure">
      <div class="impact-number">{{ number }}</div>
      <div class="impact-label">{{ label }}</div>
    </div>
  `,
  styles: [`
    .impact-figure {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: var(--spacing-md);
      background: #f9f9f9;
      border-radius: 8px;
      box-shadow: 0 1px 4px rgba(0,0,0,0.04);
      min-width: 120px;
    }
    .impact-number {
      font-size: 2.5rem;
      font-weight: bold;
      color: var(--color-primary, #1976d2);
    }
    .impact-label {
      font-size: 1rem;
      color: var(--color-text, #222);
      margin-top: var(--spacing-xs);
      text-align: center;
    }
  `],
})
export class ImpactFigureComponent {
  @Input() number!: string | number;
  @Input() label!: string;
}
