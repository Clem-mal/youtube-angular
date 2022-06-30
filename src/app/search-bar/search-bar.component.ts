import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {

  public searchValue: string = "";

  @Output()
  searchValueToParent:EventEmitter<string> = new EventEmitter();

  searchValueTarget(): void {
    this.searchValueToParent.emit(this.searchValue)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
