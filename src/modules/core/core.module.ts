import { ModuleWithProviders, NgModule } from '@angular/core';
import { ApiService, PaginationApiService } from './services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    console.log('CoreModule created');
    return {
      ngModule: CoreModule,
      providers: [
        ApiService,
        PaginationApiService
      ]
    };
  }
}
