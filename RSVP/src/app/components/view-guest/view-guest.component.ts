import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormServiceService } from 'src/app/service/form-service.service';

@Component({
  selector: 'app-view-guest',
  templateUrl: './view-guest.component.html',
  styleUrls: ['./view-guest.component.css']
})
export class ViewGuestComponent {
  displayedColumns: string[] = ['first Name', 'Last Name', 'Food'];
  guestList!:any;
  peopleCount!: number;


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.guestList.paginator = this.paginator;
  }

  constructor(private formService: FormServiceService){}

  ngOnInit(): void {
    this.formService.getGuest().subscribe(res=>{
      this.peopleCount = res[1].count;
      this.guestList = res[0].people
      console.log(this.guestList);

    })
  }
}
