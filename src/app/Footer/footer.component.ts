import { Component } from "@angular/core";

@Component({
  selector: 'app-Footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']

})


export class FooterComponent {
  autor: any = { nombre: 'Andrea', apellido: 'Pimiento' }
}
