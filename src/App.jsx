import './App.css';
import React from 'react';
import Top from './components/Top';
import data from './data.json'
import Cardlist from './components/cardlist';
import Field from './components/field';

class App extends React.Component{
  constructor(){
    super()
    this.state ={
      jobs : data,
      filter : []
    }
  }

  Onclick_tag =(filter_tag)=>{
    if(!this.state.filter.length){
      
      this.setState({
      filter : [filter_tag]
    })
    }else{
        const check_tag = this.state.filter.includes(filter_tag)
        if(!check_tag){
          this.setState({filter : [...this.state.filter,filter_tag]})
        }
      }
    }

  Onclear =() =>{
    this.setState({filter : []})
  }
  OnRemove = (e) => {
      this.setState({filter : this.state.filter.filter(tag => tag!==e)})
  }
    // this.state.jobs.forEach((job) => {
    //     const ef = [job.role, job.level,...job.languages,...job.tools]
    //     console.log(ef);
    //     this.state.filter.every(tag => ef.includes(tag))
    //   })
  filter = ({ role, level, tools, languages }) => {
      const tags = [role, level,...languages,...tools];
      // console.log(this.state.filter.every((tag) => tags.includes(tag)))
      return this.state.filter.every((tag) => tags.includes(tag));
    };
    


  render(){
    // const string = JSON.stringify(data_json);
    // const data = JSON.parse(string);
    // const Filter_job = data.filter(job => 
    //    job.level.includes(this.state.filter)
    //   )
    const Filter_job = this.state.jobs.filter(this.filter);
    // console.log(Filter_job); 


    return(
      <div className='bg-[#EFFAFA]'>
        <Top />
        <Field tags={this.state.filter} clear ={this.Onclear} remove={this.OnRemove}/>
        <Cardlist jobs={Filter_job} Onclick_tag={this.Onclick_tag}/>

      </div>
    );
  }

}

export default App;
