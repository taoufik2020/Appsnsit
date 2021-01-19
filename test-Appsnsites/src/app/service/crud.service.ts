import { Appsnsits } from "./../models/appsnsits";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
const Host = "http://localhost:3000/api";
@Injectable({
  providedIn: "root",
})
export class CrudService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Appsnsits[]>(Host);
  }
  Delete(id) {
    return this.http.delete(`${Host}/delete/${id} `);
  }
  persiste(obj) {
    return this.http.post(`${Host}/add `, obj);
  }
  updade(id, objet) {
    return this.http.put(`${Host}/update/${id} `, objet);
  }
}
