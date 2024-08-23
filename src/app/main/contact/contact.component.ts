import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslateModule, FormsModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    privacyAccepted: false,
  };

  mailTest = true;
  privacyError = false;
  thanksMessageVisible = false;

  post = {
    endPoint: 'https://buenyamin-tig.developerakademie.net/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    Object.values(ngForm.controls).forEach((control) => {
      control.markAsTouched();
    });

    if (!this.contactData.privacyAccepted) {
      this.privacyError = true;
    } else {
      this.privacyError = false;
    }
if (ngForm.submitted && ngForm.form.valid && !this.privacyError) {
      if (!this.mailTest) {
        this.http
          .post(this.post.endPoint, this.post.body(this.contactData))
          .subscribe({
            next: (response) => {
              ngForm.resetForm();
              this.showThanksMessage();
            },
            error: (error) => {
              console.error(error);
            },
            complete: () => console.info('send post complete'),
          });
      } else {
        ngForm.resetForm();
        this.showThanksMessage();
      }
    }
  }

  onPrivacyCheckboxChange() {
    if (this.contactData.privacyAccepted) {
      this.privacyError = false;
    }
  }

  showThanksMessage() {
    this.thanksMessageVisible = true;
    setTimeout(() => {
      this.thanksMessageVisible = false;
    }, 4500);
  }

  translate = inject(TranslationService);
}