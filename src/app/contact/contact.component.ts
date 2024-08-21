import { HttpClient } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  }

  checkedPrivacy = false;
  privacyisNotValid = false;

  namePH = '';
  mailPH = '';
  messagePH = '';
  send = '';

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    this.setTranslations();
    this.translate.onLangChange.subscribe(() => {
      this.setTranslations();
    });
  }

  private setTranslations() {
    this.translate.get('CONTACT.name').subscribe((translated: string) => {
      this.namePH = translated;
    });
    this.translate.get('CONTACT.email').subscribe((translated: string) => {
      this.mailPH = translated;
    });
    this.translate.get('CONTACT.message').subscribe((translated: string) => {
      this.messagePH = translated;
    });
    this.translate.get('CONTACT.send').subscribe((translated: string) => {
      this.send = translated;
    });
  }

  checkPrivacy() {
    if (this.checkedPrivacy == true) {
      this.privacyisNotValid = true;
    } else {
      this.privacyisNotValid = false;
    }
  }

  sendMessage(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted && this.checkedPrivacy == true) {
      ngForm.resetForm();
    } else {
      if (this.checkedPrivacy == false) {
        this.privacyisNotValid = true;
      }
    }
  }

  mailTest = false;

  post = {
    endPoint: 'https://saskiarichter.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  isSubmitted = false;

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest && this.checkedPrivacy == true) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.isSubmitted = true;
            setTimeout(() => {
              this.isSubmitted = false;
            }, 3000);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest && this.checkedPrivacy == true) {
      ngForm.resetForm();
      this.isSubmitted = true;
      setTimeout(() => {
        this.isSubmitted = false;
      }, 3000);
    } else {
      if (this.checkedPrivacy == false) {
        this.privacyisNotValid = true;
      }
    }
  }
}
