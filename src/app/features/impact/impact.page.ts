import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '../../shared-material.module';
import { ImpactFigureComponent } from './components/impact-figure/impact-figure.component';
import { StoryCardComponent } from './components/story-card/story-card.component';
import { ImpactService } from './impact.service';

@Component({
  selector: 'app-impact-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SharedMaterialModule,
    ImpactFigureComponent,
    StoryCardComponent,
  ],
  templateUrl: './impact.page.html',
  styleUrls: ['./impact.page.scss'],
})
export class ImpactPageComponent {
  private impactService = inject(ImpactService);
  router = inject(Router);

  highlights = this.impactService.getHighlights();
  stories = this.impactService.getStories();

  fundsHelp = [
    { amount: '£5', outcome: 'Provides 10 meals' },
    { amount: '£20', outcome: 'Supplies school books for 4 children' },
    { amount: '£50', outcome: 'Funds a community workshop' },
    { amount: '£100', outcome: 'Supports a family for a month' },
  ];

  trustLogos = [
    { src: 'assets/img/stripe.webp', alt: 'Stripe PCI' },
    { src: 'assets/img/charity-accreditation.webp', alt: 'Charity Accreditation' },
    { src: 'assets/img/partner1.webp', alt: 'Partner 1' },
    { src: 'assets/img/partner2.webp', alt: 'Partner 2' },
  ];

  goDonate() {
    this.router.navigate(['/donate']);
  }
}
