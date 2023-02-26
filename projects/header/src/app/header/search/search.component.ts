import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public searchResults: Array<string> = [];
  @ViewChild('openSearchButton') searchButtonRef: ElementRef | undefined;
  @ViewChild('searchText') searchInputRef: ElementRef | undefined;

  constructor(
    private cd: ChangeDetectorRef,
    private http: HttpClient,
    private fb: FormBuilder
  ) {
    this.fg = this.fb.group({
      search: this.fb.control('', [Validators.required]),
    });
  }
  public searchOpen = false;
  public fg: FormGroup;
  public openSearch() {
    this.searchOpen = true;
    this.cd.detectChanges();
    this.searchInputRef?.nativeElement.focus();
  }

  public closeSearch() {
    this.searchOpen = false;
    this.cd.detectChanges();
  }

  public doSearch() {
    this.http
      .get('http://localhost:8080/search')
      .pipe(take(1))
      .subscribe((search) => console.log(search));

    this.searchResults = ['something', 'another thing', 'one more thing'];
    this.cd.detectChanges();
  }

  @HostListener('window:keydown.escape', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.closeSearch();
    this.searchButtonRef?.nativeElement.focus();
  }
}
