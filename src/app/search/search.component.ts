import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  userId:any;
  result:any;
  allusers:any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getalluser().subscribe(users => {
      this.allusers=users;
    // console.log(users)

    });
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
         this.result = user;
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
}
