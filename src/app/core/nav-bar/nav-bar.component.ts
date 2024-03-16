import { Component, HostListener } from '@angular/core';
import { SearchService } from 'src/app/search/search.service';
import { ShopParams } from 'src/app/shared/models/shopParams';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  isMainNavbarFixed: boolean = false;
  isSearchActive = false;
  shopParams = new ShopParams();

  constructor(private searchService: SearchService) {}

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

  performSearch(event: any) {
    const searchTerm = (event.target as HTMLInputElement).value;
    console.log("Performing search with term:", searchTerm);
    this.searchService.updateSearchParams({ search: searchTerm });
  }  

  closeSearch() {
    this.isSearchActive = false;
    const searchInput = document.getElementById('searchInput') as HTMLInputElement;
    if (searchInput) {
      searchInput.value = '';
      console.log("Search closed");
      this.searchService.updateSearchParams({ search: '' });
    } else {
      console.error("Search input element not found.");
    }
  }

  pauseTicker(pause: boolean) {
    const tickers = document.querySelectorAll('.infos-ticker') as NodeListOf<HTMLElement>;
    tickers.forEach((ticker) => {
      ticker.style.animationPlayState = pause ? 'paused' : 'running';
    });
  }
}
