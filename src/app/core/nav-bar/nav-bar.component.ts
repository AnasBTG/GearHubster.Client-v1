import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  isMainNavbarFixed: boolean = false;

  isSearchActive = false;

  @HostListener('window:scroll', ['$event'])

  onScroll() {
    const mainNavbar = document.getElementById('mainNavBar');

    if (mainNavbar)
    {
      this.isMainNavbarFixed = window.scrollY > mainNavbar.offsetHeight;
    }
  }

  openSearch() {
    this.isSearchActive = true;
    console.log("Search opened");
  }

  closeSearch() {
    this.isSearchActive = false;
    console.log("Search opened");
  }

  pauseTicker(pause: boolean) {
    const tickers = document.querySelectorAll('.infos-ticker') as NodeListOf<HTMLElement>;
    tickers.forEach((ticker) => {
      ticker.style.animationPlayState = pause ? 'paused' : 'running';
    });
  }
}
