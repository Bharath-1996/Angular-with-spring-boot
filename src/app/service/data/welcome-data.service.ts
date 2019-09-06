import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export class helloWorldBean
{
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  executeHelloWorld()
  {
    console.log("excutehelloworld")
    return this.http.get<helloWorldBean>('http://localhost:8080/hello-world-bean');
    //console.log("excutehelloworld")
  }
  executeHelloWorldwithpathvariable(name)
  {
    console.log("excutehelloworld")
    return this.http.get<helloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
    //console.log("excutehelloworld")
  }
}
