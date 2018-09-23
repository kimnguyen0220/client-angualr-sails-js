import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { AssistantService } from '../../../../services/assistant.service';

@Component({
  selector: 'app-assistant-create',
  templateUrl: './assistant-create.component.html',
  styleUrls: ['./assistant-create.component.css']
})
export class AssistantCreateComponent implements OnInit {

	assistantForm: FormGroup;
	firstName: string;
	lastName: string;
	email: string;
	gender: boolean;

  constructor( private fb: FormBuilder,
  				private router: Router,
  				private assistantService: AssistantService
  	) 
  {
  	this.assistantForm = fb.group({
  		firstName: ['', Validators.required],
  		lastName: ['', Validators.required],
  		email: ['', Validators.required],
  		gender: ['', Validators.required]
  	});
  }

  ngOnInit() {
  }

  create() {
  	const data = this.assistantForm.value;
  	this.assistantService.create(data).subscribe(res => {
  		alert('Create success !');
  		this.router.navigate(['']);
  	});

  }

  goBack() {
  	this.router.navigate(['']);
  }

}
