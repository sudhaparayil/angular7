import { Component, OnInit ,ViewChild} from '@angular/core';
import { UserService } from '../shared/user.service'
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  user={ _id: String,
        title: String,
        
          }
  // user:any;
  userId:any;
  result:any;
  allusers:any;
  displayedColumns = [ 'id','name','title','action'];
  dataSource: MatTableDataSource<any>;
  notExist =false;

  constructor(private userService: UserService) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.userService.getalluser().subscribe(users => {
      this.allusers=users;
    // console.log(users)
    this.dataSource = new MatTableDataSource(this.allusers);
    // console.log(this.dataSource);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    });
  }
  // loadToDataTable(data){

  //   this.notExist =false;
  //   if(data.length == 0 || data==null){
  //     this.notExist = true;
  //   }
  //   this.dataSource = new MatTableDataSource(data);
  //   // console.log(this.dataSource);
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  //   console.log(newObj)
  // }
  dataChanged(newObj) {
    // console.log("this.userId")
     if (newObj == 'all' || newObj  == undefined || newObj == null || newObj == '') {
       this.getalluser();
   //    console.log("ff");
     }
     else {
       // console.log("poooooo"); 
       
       this.userService.getUsersearch(newObj).subscribe(user => {
         console.log(user);
         this.allusers = user;
       });
     }
 
 
 
   }
   //  -----------------------
   getalluser() {
    

    this.userService.getalluser().subscribe(users => {
      this.allusers=users;
    console.log(users)

    });


  }

  getEditId(id){
    //  console.log(id);
    // this.showSpinner =false;
      this.userService.getUsersearch(id).subscribe(data=>{
        // console.log( data);
        
        this.user = data;
        console.log(this.user);
        // this.student.photoSrc = '../assets/photo_upload/' + data.photo;
        // console.log( this.student);
    
      });
  
  }
  updateUser(user){
    console.log(user)
  }
}
