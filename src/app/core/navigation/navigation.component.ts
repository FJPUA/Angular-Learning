import { Component } from '@angular/core';
import { ROUTING_TOKEN } from 'src/app/shared/enum/base-routing.enum';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  routeToken: typeof ROUTING_TOKEN = ROUTING_TOKEN;
}
