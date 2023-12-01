import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { NetdiaComponent } from '../netdia/netdia.component';
import { MovidiaComponent } from '../movidia/movidia.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {


constructor(public dialog:MatDialog){

}
openDialog(){
  this.dialog.open(DialogExampleComponent);
}
openDialog2(){
  this.dialog.open(NetdiaComponent)
}
openDialog3(){
  this.dialog.open(MovidiaComponent)
}

}


