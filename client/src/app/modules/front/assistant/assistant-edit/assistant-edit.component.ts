import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { AssistantService } from '../../../../services/assistant.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assistant-edit',
  templateUrl: './assistant-edit.component.html',
  styleUrls: ['./assistant-edit.component.css']
})
export class AssistantEditComponent implements OnInit {

  assistantForm: FormGroup;
  firstName: string;
  lastName: string;
  email: string;
  gender: boolean;

  assistant: any = [];

  constructor( private router: Router ,
               private fb: FormBuilder,
               private assistantService: AssistantService,
               private activatedRoute: ActivatedRoute) {
    this.assistantForm = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.getItemById();
  }

  getItemById() {
    this.activatedRoute.queryParams.subscribe(params => {
      const id = params.id;
      this.assistantService.getById(id).subscribe( data => {
        if(data) {
          this.assistant = data;
          this.assistantForm.patchValue(this.assistant);
        }
      });
    })
  }

  saveChange() {
    this.assistantService.update(this.assistant.id, this.assistantForm.value).subscribe( res => {
      alert('Update success !');
      this.router.navigate(['']);
    });
  }

  goBack() {
    this.router.navigate(['']);
  }

}
