import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/filter-options.interface';

@Component({
  selector: 'app-filter',
  standalone: false,
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  selectedStatus: boolean | undefined;
  
  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined
  }

  @Output('onFilter')
  onFilterEmitt = new EventEmitter<IFilterOptions>;

  onFilter() {
    this.onFilterEmitt.emit(this.filterOptions);
  }
}