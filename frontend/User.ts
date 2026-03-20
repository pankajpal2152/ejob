class User{
     private id:number=0;
     private name:string="";

     constructor(id:number,name:string){
                this.id = id;
                this.name = name;
     }
     getUser(){
        return {
            id:this.id,name:this.name
        }
     }
}

//MainScript
//We will be creating Object of the class.
let user1 = new User(1001,"Pankaj");
let user2 = new User(1002,"Nisha");
let user3 = new User(1003,"Monika");
let obj1= user1.getUser();
let obj2= user2.getUser();
let obj3= user3.getUser();
let allUsers =[obj1,obj2,obj3];
console.log(allUsers);