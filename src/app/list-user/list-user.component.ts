import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[];
  dateObj:number= Date.now();
  picPath:string="../assets/images/reactjs.png";
//Router -> navigation
//UserService -> perform CRUD operations via backed API using Http build-in service mrthods
  constructor(private router: Router,
    private userService: UserService) { }

  // Initialize with default list of users
  ngOnInit() {
    if (localStorage.getItem("username") != null) {
      //calling the getUsers() function of custom UserService
      //every service return ansyncronous data -> Observable format
      // we have a subscribe method - to get the data from the service 
      this.userService.getUsers()
        .subscribe(data => {
          this.users = data;//assigning the data fetched to the current variable
        },
        error => {
          alert(error);
        });
    }
    else
      this.router.navigate(['/login']);

  }

  // logOff user
  logOutUser(): void {
    if (localStorage.getItem("username") != null) {
      localStorage.removeItem("username");
      this.router.navigate(['/login']);
    }
  }

  // Delete User
  deleteUser(user: User): void {
    let result = confirm('Do you want to delete the user?')
    if (result) {
      this.userService.deleteUser(user.id)
        .subscribe(data => {
          this.users = this.users.filter(u => u !== user);
        },
          error => {
            alert(error);
          });
    }
  };

  // Modify USer
  editUser(user: User): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edit-user']);
  };

  // Add New User
  addUser(): void {
    this.router.navigate(['add-user']);
  };

}
