import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { FrontComponent } from './front.component';
import { AssistantComponent } from './assistant/assistant.component';
import { AssistantListComponent } from './assistant/assistant-list/assistant-list.component';
import { AssistantCreateComponent } from './assistant/assistant-create/assistant-create.component';
import {AssistantEditComponent} from './assistant/assistant-edit/assistant-edit.component';

const frontRouter: Routes = [
	{
		path: '',
		component: AssistantComponent,
		children: [
			{
				path: '',
				component: AssistantListComponent
			},

			{
				path: 'assistant/create',
				component: AssistantCreateComponent
			},

      {
        path: 'assistant/edit',
        component: AssistantEditComponent
      }
		]
	}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(frontRouter)
  ],

  exports: [ RouterModule ],
  declarations: []
})
export class FrontRoutingModule { }
