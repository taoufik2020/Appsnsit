import { CrudService } from "./../service/crud.service";
import { Appsnsits } from "./../models/appsnsits";
import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(
    private crudservice: CrudService,
    private route: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}
  resultat: Appsnsits[];
  bool: Boolean = false;
  idApp;
  appsForm: FormGroup;
  ngOnInit() {
    this.getApi();
    this.appsForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      description: ["", Validators.required],
    });
  }

  getApi() {
    this.crudservice.getAll().subscribe((data) => {
      this.resultat = data;
      console.log(data);
    });
  }
  remove(id) {
    this.crudservice.Delete(id).subscribe((data) => console.log("data", data));
    this.resultat = this.resultat.filter((x) => x._id != id);
    this.toastr.info("success", "Deleted");
  }
  navig() {
    this.route.navigate(["/add"]);
  }
  hidden(id) {
    this.bool = true;
    this.idApp = id;
  }
  Update() {
    if (this.appsForm.invalid) {
      this.toastr.error("ERROR", "Invalid Input");
      return;
    }

    this.crudservice.updade(this.idApp, this.appsForm.value).subscribe();
    this.getApi();
    this.toastr.warning("success", "Updated");
    this.appsForm.reset();
    this.bool = false;
  }
}
