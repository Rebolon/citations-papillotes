import { inject, Injectable, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Injectable()
export class Device {
  private platformId = inject(PLATFORM_ID);

  isMobile(): boolean {
    return isPlatformBrowser(this.platformId) && Object.keys(navigator).length
      ? navigator.userAgent.includes("Mobile")
      : false;
  }

  isDesktop(): boolean {
    return !this.isMobile();
  }
}
