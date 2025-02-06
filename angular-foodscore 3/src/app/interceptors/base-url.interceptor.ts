import { HttpInterceptorFn } from '@angular/common/http';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const serverUrl = 'https://api.fullstackpro.es/foodscore-lite';
  const cloneReq = req.clone({
     url: `${serverUrl}/${req.url}` 
    });
  return next(cloneReq);
};
