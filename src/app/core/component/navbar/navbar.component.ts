import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public menu : any[] = [
    {"title":"Home","url":""},
    {"title":"Magasin","url":"/shop"},
    {"title":"Produit","url":"/product"},
    {"title":"Stock","url":"/stock"},
  ]
  public adminMenu : any[]=[
    {"title":"Admin","url":"/admin"},
    {"title":"(login | logout)","url":""}
  ]    

  
}
