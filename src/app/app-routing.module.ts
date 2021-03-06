import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CweventComponent } from './cwevent/cwevent.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NewsComponent } from './news/news.component';
import { ReservationComponent } from './reservation/reservation.component';
import { VoucherComponent } from './voucher/voucher.component';
import { MenuPdfComponent } from './menu/menu-pdf/menu-pdf.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    { path: 'aboutus', component: AboutComponent },
    { path: 'menu', redirectTo: 'menu/menu-pdf/food' },
    {
        path: 'menu', component: MenuComponent, children: [
            { path: 'menu-pdf/:id', component: MenuPdfComponent }
        ]
    },
    { path: 'gallery', component: GalleryComponent },
    { path: 'news', component: NewsComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'cwevent', component: CweventComponent },
    { path: 'reservation', component: ReservationComponent },
    { path: 'voucher', component: VoucherComponent },
    { path: 'contactus', component: ContactComponent },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '404' },

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
