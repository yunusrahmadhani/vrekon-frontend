import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { IInstitute, Institute} from '../shared/model/institute.model'
import { IInstituteSrvc } from '../shared/model/instituteSrvc.model';
import { IInstituteTranslate } from '../shared/model/InstituteTranslate.model';
import { IDbSrvc } from '../shared/model/dbSrvc.model';
import { ICompareForm } from '../shared/model/compare.model';
import { ICompareResult } from '../shared/model/compareResult.model';
type EntityResponseType = HttpResponse<IInstitute>;
type EntityArrayResponseType = HttpResponse<IInstitute[]>;

@Injectable({
  providedIn: 'root'
})
export class VrekonService {


  //private API_URL= "http://85.187.132.46:8080/vrekon"
  private API_URL= "api"
  constructor(private http:HttpClient) { }

  getSetupService() : Observable<EntityArrayResponseType>{
    return this.http.post<IInstitute[]>(this.API_URL+"/setup-service",null,{ observe:"response"});
    //return this.http.post("http://localhost:1234/test.php",null);
  }

  createInstitute(model: IInstitute): Observable<EntityResponseType> {
    return this.http.post<IInstitute>(this.API_URL+"/institusi-tambah", model, { observe: 'response' });
  }
  updateInstitute(model: IInstitute): Observable<EntityResponseType> {
    return this.http.post<IInstitute>(this.API_URL+"/institusi-ubah", model, { observe: 'response' });
  }
  findInstitute(model: IInstitute): Observable<EntityResponseType> {
    return this.http.post<IInstitute>(this.API_URL+"/institusi-find", model, { observe: 'response' });
  }
  findDbService(model: IInstitute): Observable<EntityResponseType> {
    return this.http.post<IInstitute>(this.API_URL+"/db-service", model, { observe: 'response' });
  }

  createDbService(model: IDbSrvc) : Observable<HttpResponse<IDbSrvc>> {
    return this.http.post<IDbSrvc>(this.API_URL+"/db-service-tambah", model, { observe: 'response' });
  }
  updateDbService(model: IDbSrvc) : Observable<HttpResponse<IDbSrvc>> {
    return this.http.post<IDbSrvc>(this.API_URL+"/db-service-ubah", model, { observe: 'response' });
  }

  compareData(model: ICompareForm) : Observable<HttpResponse<ICompareResult>> {
    return this.http.post<ICompareResult>(this.API_URL+"/compare-data", model, { observe: 'response' });
  }
  // update(competency: ICompetency): Observable<EntityResponseType> {
  //     return this.http.put<ICompetency>(this.resourceUrl, competency, { observe: 'response' });
  // }

  // find(id: number): Observable<EntityResponseType> {
  //     return this.http.get<ICompetency>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  // }

  // query(req?: any): Observable<EntityArrayResponseType> {
  //     const options = createRequestOption(req);
  //     return this.http.get<ICompetency[]>(this.resourceUrl, { params: options, observe: 'response' });
  // }

  deleteInstitute(id: number): Observable<HttpResponse<any>> {
      return this.http.post<any>(this.API_URL+"/institusi-hapus", {'id':id}, { observe: 'response' });
  }
  deleteDbService(id: number): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.API_URL+"/db-service-hapus", {'id':id}, { observe: 'response' });
  }

}
