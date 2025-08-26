import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-story-card',
    standalone: true,
    imports: [CommonModule, MatCardModule],
    template: `
    <mat-card class="story-card">
      <div class="story-image-wrapper">
        <img [src]="imgSrc" [alt]="imgAlt" loading="lazy" />
        <div *ngIf="caption" class="caption">{{ caption }}</div>
      </div>
      <mat-card-title>{{ title }}</mat-card-title>
      <mat-card-content>
        <p>{{ summary }}</p>
      </mat-card-content>
    </mat-card>
  `,
    styles: [`
    .story-card {
      display: flex;
      flex-direction: column;
      aspect-ratio: 4/5;
      min-width: 220px;
      max-width: 320px;
      margin: auto;
    }
    .story-image-wrapper {
      width: 100%;
      aspect-ratio: 4/3;
      overflow: hidden;
      border-radius: 8px 8px 0 0;
      position: relative;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .caption {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0,0,0,0.5);
      color: #fff;
      font-size: 0.85rem;
      padding: 0.25rem 0.5rem;
      border-radius: 0 0 8px 8px;
      text-align: center;
    }
  `],
})
export class StoryCardComponent {
    @Input() imgSrc!: string;
    @Input() imgAlt!: string;
    @Input() title!: string;
    @Input() summary!: string;
    @Input() caption?: string;
}
