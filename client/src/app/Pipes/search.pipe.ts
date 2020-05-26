import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  //, searchKey: string
  transform(items: any, searchInput: string): any {
      if (!searchInput) return items;
    if (!Array.isArray(items)) return [];
    return items.filter((product) => {
      return product.title.toLowerCase().includes(searchInput.toLowerCase())
    })
  }

}


