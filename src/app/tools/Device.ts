import { Injectable } from "@angular/core";

@Injectable()
export class Device {
  isMobile(): boolean {
    // This check is for prerender prevent errors
    return Object.keys(navigator).length
      ? navigator.userAgent.includes("Mobile")
      : false;
  }

  isDesktop(): boolean {
    return !this.isMobile();
  }
}
