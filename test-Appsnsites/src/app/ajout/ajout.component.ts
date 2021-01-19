import { CrudService } from "./../service/crud.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-ajout",
  templateUrl: "./ajout.component.html",
  styleUrls: ["./ajout.component.css"],
})
export class AjoutComponent implements OnInit {
  appsForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private crudservice: CrudService,
    private route: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.appsForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      description: ["", Validators.required],
    });
  }
  persiste() {
    if (this.appsForm.invalid) {
      this.toastr.error("ERROR", "Invalid Input");
      return;
    }
    this.crudservice
      .persiste(this.appsForm.value)
      .subscribe((data) => console.log(data));
    this.appsForm.reset();
    this.route.navigate(["/"]);
    this.toastr.success("success", "Added");
  }
}
