import {
  Component,
  HostListener,
  Inject,
  OnInit,
  OnDestroy,
  PLATFORM_ID,
} from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';

import {
  faHome,
  faUserAlt,
  faSuitcase,
  faListAlt,
  faPhone,
  faMapMarkerAlt,
  faLanguage,
  faDownload,
  faCalendarAlt,
  faFutbol,
  faGuitar,
  faEnvelope,
  faPaperPlane,
  faLaptop,
  faCode,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule, CommonModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  // FontAwesome icons
  faHome = faHome;
  faUserAlt = faUserAlt;
  faSuitcase = faSuitcase;
  faListAlt = faListAlt;
  faPhone = faPhone;
  faMapMarkerAlt = faMapMarkerAlt;
  faLanguage = faLanguage;
  faDownload = faDownload;
  faCalendarAlt = faCalendarAlt;
  faFutbol = faFutbol;
  faGuitar = faGuitar;
  faEnvelope = faEnvelope;
  faPaperPlane = faPaperPlane;
  faLaptop = faLaptop;
  faCode = faCode;
  faRocket = faRocket;

  isBannerClosed: boolean = false;
  hasScrollBackground: boolean = false;

  // Language state
  currentLang: string = 'fr';

  // Dropdown Références
  isRefsDropdownOpen: boolean = false;
  private refsDropdownTimeout: ReturnType<typeof setTimeout> | null = null;

  openRefsDropdown(): void {
    if (this.refsDropdownTimeout !== null) {
      clearTimeout(this.refsDropdownTimeout);
      this.refsDropdownTimeout = null;
    }
    this.isRefsDropdownOpen = true;
  }

  closeRefsDropdown(): void {
    this.refsDropdownTimeout = setTimeout(() => {
      this.isRefsDropdownOpen = false;
      this.refsDropdownTimeout = null;
    }, 150);
  }

  closeBanner(): void {
    this.isBannerClosed = true;
  }

  // Component state
  screenWidth: number = 1024;
  isBurgerMenuClicked: boolean = false;
  currentLinkNumber: number = 1;
  currentAnchorTag: string = 'accueil';
  private isBrowser: boolean = false;

  // Sections configuration
  private sections = [
    { id: 'accueil', linkNumber: 1 },
    { id: 'a-propos', linkNumber: 2 },
    { id: 'services', linkNumber: 3 },
    { id: 'projets', linkNumber: 4 },
    { id: 'contact', linkNumber: 5 },
    { id: 'galerie', linkNumber: 6 },
    { id: 'temoignages', linkNumber: 7 },
    { id: 'certifications', linkNumber: 8 },
  ];

  private scrollThreshold: number = 100;

  constructor(
    private router: Router,
    private translateService: TranslateService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser && typeof window !== 'undefined') {
      this.screenWidth = window.innerWidth;
    }

    this.currentLang = 'fr';
  }

  ngOnInit(): void {
    this.setActiveLink(1);
    this.checkBannerState();

    if (this.isBrowser && typeof window !== 'undefined') {
      this.screenWidth = window.innerWidth;
    }
  }

  ngOnDestroy(): void {
    if (this.refsDropdownTimeout !== null) {
      clearTimeout(this.refsDropdownTimeout);
    }
  }

  /**
   * Toggle entre FR et EN
   */
  switchLanguage(): void {
    const newLang = this.currentLang === 'fr' ? 'en' : 'fr';
    this.translateService.use(newLang);
    this.currentLang = newLang;

    if (this.isBrowser) {
      localStorage.setItem('portfolio-lang', newLang);
    }
  }

  /**
   * Gestion du menu burger
   */
  onBurgerMenu(): void {
    if (!this.isBrowser) return;

    this.isBurgerMenuClicked = !this.isBurgerMenuClicked;

    const navSmallScreen = this.document.querySelector('nav') as HTMLElement;
    const header = this.document.querySelector('header') as HTMLElement;

    if (this.isBurgerMenuClicked) {
      navSmallScreen?.classList.add('toggle-nav');

      if (
        typeof window !== 'undefined' &&
        window.pageYOffset <= header?.clientHeight &&
        !this.hasScrollBackground
      ) {
        this.hasScrollBackground = true;
      }
    } else {
      navSmallScreen?.classList.remove('toggle-nav');

      if (
        typeof window !== 'undefined' &&
        window.pageYOffset <= header?.clientHeight &&
        this.hasScrollBackground
      ) {
        this.hasScrollBackground = false;
      }
    }
  }

  /**
   * Gestion du scroll de la fenêtre
   */
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    if (!this.isBrowser || typeof window === 'undefined') return;

    if (this.isBurgerMenuClicked) return;

    const header = this.document.querySelector('header') as HTMLElement;
    const headerHeight = header?.clientHeight || 80;

    this.hasScrollBackground = window.pageYOffset > headerHeight;

    this.updateActiveSection();
  }

  /**
   * Gestion du redimensionnement de la fenêtre
   */
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (!this.isBrowser || typeof window === 'undefined') return;

    this.screenWidth = window.innerWidth;

    if (this.screenWidth > 850 && this.isBurgerMenuClicked) {
      this.isBurgerMenuClicked = false;
      const nav = this.document.querySelector('nav') as HTMLElement;
      nav?.classList.remove('toggle-nav');
    }
  }

  /**
   * Navigation vers une ancre
   */
  navigateToAnchor(targetAnchor: string): void {
    if (!this.isBrowser) return;

    if (this.isBurgerMenuClicked) {
      this.onBurgerMenu();
    }

    setTimeout(
      () => {
        const element = this.document.getElementById(targetAnchor);
        if (element && typeof window !== 'undefined') {
          const headerHeight = this.isBannerClosed ? 90 : 146;
          const elementPosition = element.offsetTop - headerHeight;

          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth',
          });

          this.currentAnchorTag = targetAnchor;
        }
      },
      this.isBurgerMenuClicked ? 300 : 0
    );
  }

  /**
   * Définir le lien actif et naviguer
   */
  setActiveLinkAndNavigate(linkNumber: number, targetAnchor: string): void {
    this.setActiveLink(linkNumber);
    this.navigateToAnchor(targetAnchor);
  }

  /**
   * Définir le lien actif
   */
  setActiveLink(linkNumber: number): void {
    if (linkNumber >= 1 && linkNumber <= 8) {
      this.currentLinkNumber = linkNumber;
    }
  }

  /**
   * Mettre à jour la section active basée sur le scroll
   */
  private updateActiveSection(): void {
    if (!this.isBrowser || typeof window === 'undefined') return;

    const headerOffset = this.isBannerClosed ? 90 : 146;

    for (let i = this.sections.length - 1; i >= 0; i--) {
      const section = this.document.getElementById(
        this.sections[i].id
      ) as HTMLElement;
      if (section) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.pageYOffset - headerOffset;

        if (window.pageYOffset >= sectionTop - this.scrollThreshold) {
          this.setActiveLink(this.sections[i].linkNumber);
          this.currentAnchorTag = this.sections[i].id;
          break;
        }
      }
    }
  }

  /**
   * Gérer les touches du clavier pour l'accessibilité
   */
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.isBurgerMenuClicked) {
      this.onBurgerMenu();
    }

    if (event.altKey) {
      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault();
          this.navigateToSection(-1);
          break;
        case 'ArrowDown':
          event.preventDefault();
          this.navigateToSection(1);
          break;
      }
    }
  }

  /**
   * Navigation entre sections avec les flèches
   */
  private navigateToSection(direction: number): void {
    const newLinkNumber = this.currentLinkNumber + direction;
    if (newLinkNumber >= 1 && newLinkNumber <= 8) {
      const targetSection = this.sections.find(
        (s) => s.linkNumber === newLinkNumber
      );
      if (targetSection) {
        this.setActiveLinkAndNavigate(newLinkNumber, targetSection.id);
      }
    }
  }

  /**
   * Vérifier si la bannière a été fermée précédemment
   */
  private checkBannerState(): void {
    if (!this.isBrowser || typeof localStorage === 'undefined') {
      this.isBannerClosed = false;
      return;
    }

    try {
      const bannerClosed = localStorage.getItem('alert-banner-closed');
      this.isBannerClosed = bannerClosed === 'true';

      // Restaurer la langue sauvegardée
      const savedLang = localStorage.getItem('portfolio-lang');
      if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
        this.currentLang = savedLang;
        this.translateService.use(savedLang);
      }
    } catch (error) {
      console.warn('localStorage not available');
      this.isBannerClosed = false;
    }
  }
}
