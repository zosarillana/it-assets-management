import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItotPc } from 'app/models/ItotPc';
import { ItotPeripheral } from 'app/models/ItotPeripheral';

@Injectable({
  providedIn: 'root'
})
export class ITOTService {
  private url = 'https://localhost:7233'
  constructor(private http: HttpClient) { }

  public getItots(): Observable<ItotPc[]> {
    return this.http.get<ItotPc[]>(`${this.url}/Itot/pc`);
  }

  public getItotPeripherals(): Observable<ItotPeripheral[]> {
    return this.http.get<ItotPeripheral[]>(`${this.url}/Itot/peripherals`);
  }

  uploadExcelData(data: any[]): Observable<any> {
    return this.http.post(`${this.url}/ImportItot/update/pc`, data);
  }

  uploadExcelDataPeripherals(data: any[]): Observable<any> {
    return this.http.post(`${this.url}/ImportItot/update/peripherals`, data);
  }

}
