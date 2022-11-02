import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { OrderComponent } from './order/order.component';
import { ArrangedBouquetComponent } from './arranged-bouquet/arranged-bouquet.component';
import { CustomFlowerComponent } from './custom-flower/custom-flower.component';
import { CustomSleeveComponent } from './custom-sleeve/custom-sleeve.component';
import { CustomTieComponent } from './custom-tie/custom-tie.component';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { CustomConfirmComponent } from './custom-confirm/custom-confirm.component';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path:'arranged-bouquet',
    component: ArrangedBouquetComponent,
  },
  {
    path:'custom-flower',
    component: CustomFlowerComponent,
  },
  {
    path:'custom-sleeve',
    component: CustomSleeveComponent,
  },
  {
    path:'custom-tie',
    component: CustomTieComponent,
  },
  {
    path:'custom-card',
    component: CustomCardComponent,
  },
  {
    path:'custom-confirm',
    component: CustomConfirmComponent,
  },
  {
    path:'order-list',
    component: OrderListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
