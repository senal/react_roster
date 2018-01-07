
import * as React from "react";

export class Inner extends React.Component<any, any>{
    
    constructor(props: any){
        super(props);
        this.state  = {name: "Ranga"};
    }
       
    render () {
        return <div>hello my name is { this.state.name } </div>;
    }
} 