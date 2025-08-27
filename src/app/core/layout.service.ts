import { Injectable, signal } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Injectable({ providedIn: 'root' })
export class LayoutService {
    isHandset = signal(false);
    isTablet = signal(false);
    isDesktop = signal(false);

    constructor(private bp: BreakpointObserver) {
        this.bp.observe([Breakpoints.XSmall, Breakpoints.Small])
            .subscribe(r => this.isHandset.set(r.matches));
        this.bp.observe([Breakpoints.Medium])
            .subscribe(r => this.isTablet.set(r.matches));
        this.bp.observe([Breakpoints.Large, Breakpoints.XLarge])
            .subscribe(r => this.isDesktop.set(r.matches));
    }
}
