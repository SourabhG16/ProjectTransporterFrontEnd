import { environment } from '../environments/environment';
export class DataService
{
    url = environment.url;
    sendNumber(credentials) {
        return this.http.post(`${this.url}/api/login`, credentials)
          .pipe(
            tap(res => {
              
            }),
            catchError(e => {
              
            })
          );
      }    
}