import { Injectable } from '@angular/core';

export interface ImpactHighlight {
    number: string | number;
    label: string;
}

export interface Story {
    imgSrc: string;
    imgAlt: string;
    title: string;
    summary: string;
    caption?: string;
}

@Injectable({ providedIn: 'root' })
export class ImpactService {
    getHighlights(): ImpactHighlight[] {
        return [
            { number: '10,000+', label: 'Meals provided' },
            { number: '2,500', label: 'Children helped' },
            { number: '98%', label: 'Funds to programs' },
        ];
    }

    getStories(): Story[] {
        return [
            {
                imgSrc: 'assets/img/story1.webp',
                imgAlt: 'Smiling child with meal',
                title: 'A Brighter Future',
                summary: 'Your donations helped Maria attend school and receive daily meals.',
                caption: 'Maria, age 8',
            },
            {
                imgSrc: 'assets/img/story2.webp',
                imgAlt: 'Family receiving aid',
                title: 'Hope Restored',
                summary: 'The Ahmed family rebuilt their lives after disaster, thanks to your support.',
                caption: 'Ahmed family',
            },
            {
                imgSrc: 'assets/img/story3.webp',
                imgAlt: 'Volunteer teaching children',
                title: 'Learning Together',
                summary: 'Volunteers bring education and joy to remote communities.',
                caption: 'Volunteer Sarah',
            },
        ];
    }
}
