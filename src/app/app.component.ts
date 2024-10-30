import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { FeatureSectionComponent } from './feature-section/feature-section.component';
import { ServiceSectionComponent } from './service-section/service-section.component';
import { SubscribeSectionComponent } from './subscribe-section/subscribe-section.component';
import { ExpertSectionComponent } from './expert-section/expert-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,HeroSectionComponent,FeatureSectionComponent,
    ServiceSectionComponent,SubscribeSectionComponent,ExpertSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'insurance-app';
}
