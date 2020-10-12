import { Routes , RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FirstpageComponent } from './firstpage/firstpage.component';

const routes : Routes = [
    { path: 'submit', component: FirstpageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutePaths{}