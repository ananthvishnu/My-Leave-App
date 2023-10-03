import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
ngOnInit(): void {
  let sidebar:any = document.querySelector(".sidebar");
  let closeBtn:any = document.querySelector("#btn");
  let searchBtn:any = document.querySelector(".bx-search");
  closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
  });
  searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
  });
  // following are the code to change sidebar button(optional)
  function menuBtnChange() {
   if(sidebar.classList.contains("open")){
     closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
   }else {
     closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
   }
  }
}

openModal(){
  const modelDiv =   document.getElementById('myModel');
if(modelDiv != null){
  modelDiv.style.display = 'block';
}
}

closeModel(){
  const modelDiv =   document.getElementById('myModel');
if(modelDiv != null){
  modelDiv.style.display = 'none';
}
}
}
