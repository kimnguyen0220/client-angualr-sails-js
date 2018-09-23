import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontComponent } from './front.component';
import { AssistantComponent } from './assistant/assistant.component';
import { AssistantListComponent } from './assistant/assistant-list/assistant-list.component';
import { FrontRoutingModule } from './front-routing.module';
import { AssistantService } from '../../services/assistant.service';
import {HttpClientModule} from '@angular/common/http';
import { AssistantCreateComponent } from './assistant/assistant-create/assistant-create.component';

import {FormBuilder, ReactiveFormsModule, FormsModule  } from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,
    FrontRoutingModule,
    HttpClientModule,
    ReactiveFormsModule ,
    FormsModule 
  ],
  declarations: [
  	FrontComponent,
  	AssistantComponent,
  	AssistantListComponent,
  	AssistantCreateComponent,
  ],

  providers: [ AssistantService, FormBuilder ]
})
export class FrontModule { }
