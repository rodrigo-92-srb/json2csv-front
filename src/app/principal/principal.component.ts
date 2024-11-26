import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConversionService } from '../services/conversion.service';

@Component({
  selector: 'app-principal',
  imports: [FormsModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  csv: string = '';
  jsonInput: string = '';

  constructor(private conversionService: ConversionService) { }

  convertJsonToCsv(json: string) {
    this.conversionService.convertJsonToCsv(json).subscribe(response => {
      if(response.success) {
        this.csv = response.data;
      }else {
        console.log(response.message);
      }
    });
  }

}
