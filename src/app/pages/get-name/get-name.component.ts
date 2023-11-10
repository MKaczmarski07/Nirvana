import { Component } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-get-name',
  templateUrl: './get-name.component.html',
  styleUrls: ['./get-name.component.css'],
})
export class GetNameComponent {
  constructor(public userDataService: UserDataService) {}
}
