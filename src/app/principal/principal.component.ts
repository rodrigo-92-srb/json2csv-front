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
  apiMessage: string = '';
  showSuccess: boolean = false;
  showDanger: boolean = false;

  constructor(private conversionService: ConversionService) { }

  convertJsonToCsv(json: string) {
    this.conversionService.convertJsonToCsv(json).subscribe(response => {
      if(response.success) {
        this.showSuccess = true;
        this.showDanger = false;
        this.csv = response.data;
        this.apiMessage = "Conversão realizada com sucesso!";
        console.log(response);
      }else {
        this.showSuccess = false;
        this.showDanger = true;
        this.apiMessage = response.message;
        console.log(response.message);
      }
    }, error => {
      this.showSuccess = false;
      this.showDanger = true;
      this.apiMessage = this.getErrorMessage(error.error.message);
    });
  }

  getErrorMessage(errorMessage: string): string {
    if (errorMessage.includes('JsonParseException')) {
      return 'Erro ao parsear o JSON. Verifique se o JSON está correto.';
    } 
    else {
      return 'Erro ao converter o JSON para CSV. Tente novamente.';
    }
  }

  clearTextareas() {
    this.csv = '';
    this.jsonInput = '';
    this.apiMessage = '';
    this.showSuccess = false;
    this.showDanger = false;
  }
}
