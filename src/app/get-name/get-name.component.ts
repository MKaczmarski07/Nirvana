import { Component } from '@angular/core';
import { GetNameService } from '../get-name.service';

@Component({
  selector: 'app-get-name',
  templateUrl: './get-name.component.html',
  styleUrls: ['./get-name.component.css'],
})
export class GetNameComponent {
  constructor(public getNameService: GetNameService) {}
}
