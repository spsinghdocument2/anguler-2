import { Component } from '@angular/core';
import { ProviderService,NameService } from '../shared/index';
/**
*	This class represents the lazy loaded DashboardComponent.
*/

@Component({
	moduleId: module.id,
	selector: 'dashboard-cmp',
	templateUrl: 'dashboard.component.html'
})
export class DashboardComponent
{
private baseAddress: string= "";
private name: string= "";
public constructor( private providerService :ProviderService,private NameService :NameService)
{
this.baseAddress =this.providerService.getTokenBaseAddress();
this.name =this.NameService.getName();
//alert(this.name);	
}

 }
