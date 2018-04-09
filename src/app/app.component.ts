import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  public opened: boolean = true;
  @ViewChild('drawer') drawer: ElementRef;
  @ViewChild('sidebarContent') content: ElementRef;
  @ViewChild('toggleSidebar') toggle: ElementRef;
  @ViewChild('footer') footer: ElementRef;

  public toggleSidebar() {
    this.opened = !this.opened;

  }

  onOpenStart() {
  }

  ngAfterViewInit() {
    this.drawer.nativeElement.style.top = this.toggle.nativeElement.offsetHeight;
  }
}
