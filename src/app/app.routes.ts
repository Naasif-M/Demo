import { Routes } from '@angular/router';
import { PhotoComponent } from './photo/photo.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
    {path : 'photo', component:PhotoComponent},
    {path:'blog' , component:BlogComponent}
];
