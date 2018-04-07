import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  private _opened: boolean = true;
  @ViewChild('drawer') drawer: ElementRef;
  @ViewChild('sidebarContent') content: ElementRef;
  @ViewChild('toggleSidebar') toggle: ElementRef;

  private _toggleSidebar() {
    this._opened = !this._opened;

  }

  onOpenStart() {
  }

  ngAfterViewInit() {
    this.drawer.nativeElement.style.top = this.toggle.nativeElement.offsetHeight;
    this.content.nativeElement.style.marginLeft = this.drawer.nativeElement.offsetWidth;
  }
}
