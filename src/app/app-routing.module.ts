import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PandaDataReaderComponent} from "./panda-data-reader/panda-data-reader.component";

const routes: Routes = [
    {path: 'reader', component: PandaDataReaderComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
