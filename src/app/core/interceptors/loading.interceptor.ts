import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingController } from '@ionic/angular/standalone';
import { finalize, from, switchMap } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingCtrl = inject(LoadingController);

  return from(loadingCtrl.create({
    message: 'Cargando datos...',
    spinner: 'crescent',
    backdropDismiss: false
  })).pipe(
    switchMap(loader => {
      loader.present();
      return next(req).pipe(
        finalize(() => {
          loader.dismiss();
        })
      );
    })
  );
};
