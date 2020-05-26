import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms"
import { SearchService } from "../../services/search-service/search.service"

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  searchInput = new FormControl("")
  constructor(public searchService: SearchService) { }

  ngOnInit() {
  }
  setSearchInputValue() {
    this.searchService.setSearchValue(this.searchInput.value)
  }
}
