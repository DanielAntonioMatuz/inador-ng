import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from '../customer';
import {CustomerService} from '../customer.service';
import {Rfid} from '../rfid';
import {CustomersListComponent} from '../customers-list/customers-list.component';

@Component({
  selector: 'app-list-rfid',
  templateUrl: './list-rfid.component.html',
  styleUrls: ['./list-rfid.component.css']
})
export class ListRfidComponent implements OnInit {
  rfids: Observable<Rfid[]>;
  rfidList = [];
  custList: Observable<Customer[]>
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.rfids = this.customerService.getRfidList();
    console.log(this.rfids);

    this.customerService.getRfidList().subscribe(
      response => {

        this.rfidList = response;

        for(let i=0; i<this.rfidList.length; i++){
          console.log(this.rfidList[i].id_usuario)
        }
      }, error => {
        var errorMessage = <any>error;
        console.log(errorMessage);

      }
    )


  }

  deleteRfid(id: number) {
    this.customerService.deleteRfid(id)
      .subscribe(
        data => {
          console.log(data);
          window.location.reload();
        },
        error => console.log(error));
  }
}
