import { Component, OnInit } from '@angular/core';
import { AssistantService } from '../../../../services/assistant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assistant-list',
  templateUrl: './assistant-list.component.html',
  styleUrls: ['./assistant-list.component.css']
})
export class AssistantListComponent implements OnInit {

	listAssistant: any = [];
  	constructor( private assistantService: AssistantService,
  				private router: Router
  		) { }

	  ngOnInit() {
	  	this.getListAssistant();
	  }

	  getListAssistant() {
	  	this.assistantService.getList().subscribe( res => {
	  		this.listAssistant = res;
	  	});
	  }
	  create() {
	  	this.router.navigate(['create']);
	  }
}
