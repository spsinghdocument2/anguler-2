import { Component, ViewContainerRef } from '@angular/core';
import { ProviderService } from './shared/index';
/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'pm-app',
  templateUrl: 'app.component.html',
})
 export class AppComponent
{
	private baseAddress: string= "";
	private viewContainerRef: ViewContainerRef;
	public constructor(viewContainerRef:ViewContainerRef, private providerService :ProviderService)
	 {
		// You need this small hack in order to catch application root view container ref
		this.viewContainerRef = viewContainerRef;
		//this.baseAddress =this.providerService.getTokenBaseAddress();
	//	alert(this.providerService.getTokenBaseAddress());
		//console.log('Environment config', this.providerService.getTokenBaseAddress());
	}
}
