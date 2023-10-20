import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Component({
  // standalone: true,
  selector: 'vdp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // imports: [BrowserModule, HttpClientModule],
})
export class HeaderComponent implements OnInit {
  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {
    this.text = 'default';
  }
  public text: string;
  ngOnInit(): void {
    this.http
      .get('http://localhost:8080/me')
      .pipe(take(1))
      .subscribe((user) => console.log(user));
  }

  public changeMe(event: MouseEvent) {
    console.log('test');
    this.text = event.composedPath().join('');
    this.cd.detectChanges();
  }

  public showMenuItems(): void {}
}
