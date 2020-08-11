import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any, searchText: string): any[] {
    items.forEach(res => {
      if (!res.Symbol) {
        return [];
      }
     })
   
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    items.forEach(it => {
      console.log(it)
      return it.Symbol.toLocaleLowerCase().includes(searchText);
    })
  }
}
