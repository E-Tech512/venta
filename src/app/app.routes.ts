import { Routes } from '@angular/router';
import { PanelComponent } from './modules/panel/panel.component';
import { CategoriaComponent } from './modules/panel/pages/categoria/categoria.component';
import { ProductoComponent } from './modules/panel/pages/producto/producto.component';

export const routes: Routes = [
    {
        path:'',
        component:PanelComponent,
        children:[
            {
                path:'categoria',
                component:CategoriaComponent
            },
            {
                path:'producto',
                component:ProductoComponent
            }
        ]
    }
];
