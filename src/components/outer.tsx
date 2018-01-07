import * as React from "react";
import { Inner } from "./inner";

export class Outer extends React.Component<any, any>{
    
    render () { 
              return  <div><h2>Outer <header></header></h2><Inner/></div>;
              
    }
}