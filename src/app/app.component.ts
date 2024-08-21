import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ContactComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private translate: TranslateService) {

    const storedLanguage = localStorage.getItem('selectedLanguage');
    const defaultLanguage = storedLanguage ? storedLanguage : 'en';
    this.translate.setDefaultLang(defaultLanguage);
    this.translate.use(defaultLanguage);
  }
}
