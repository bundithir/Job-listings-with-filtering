import React from "react";
import Card from "./Card";

class Cardlist extends React.Component{
    render(){
        const CardComponent = this.props.jobs.map((job ,i) =>{
           return <Card 
            key={i}
            id={this.props.jobs[i].id}
            company={this.props.jobs[i].company}
            logo={this.props.jobs[i].logo}
            new={this.props.jobs[i].new}
            featured={this.props.jobs[i].featured}
            position={this.props.jobs[i].position}
            role={this.props.jobs[i].role}
            level={this.props.jobs[i].level}
            postedAt={this.props.jobs[i].postedAt}
            contract={this.props.jobs[i].contract}
            location={this.props.jobs[i].location}
            languages={this.props.jobs[i].languages}
            tools={this.props.jobs[i].tools}
            Onclick_tag={this.props.Onclick_tag}
            />
            })
   
    return (
        <div>
            {CardComponent}
        </div>
    ) 
    }
}

export default Cardlist;