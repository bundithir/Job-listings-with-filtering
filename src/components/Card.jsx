import React from "react";
class Card extends React.Component{
    render(){     
    return(
        <div className="px-[2rem] mb-[2rem]">
            <div className={`container mx-auto bg-white p-[1rem] pt-0 lg:p-[2rem] shadow-xl rounded-lg ${this.props.id<=2?"border-l-4 border-l-[#7B8E8E]":null}`}>
                <div className="flex lg:justify-between flex-col lg:flex-row">
                    <div className="job flex flex-col lg:flex-row">
                        <div className="profile lg:mr-[1rem]">
                            <img src={this.props.logo} alt={this.props.id} className='lg:h-full lg:w-full h-[40px] w-[40px] -translate-y-5 lg:translate-y-0'/>
                        </div>
                        <div className="about flex flex-col justify-center">
                            <div className="company flex items-center gap-x-4">
                                <h2 className="text-[#7B8E8E] font-bold">{this.props.company}</h2>
                                {this.props.new?
                                <p className="uppercase py-1 px-2 rounded-full bg-[#7B8E8E] font-bold text-white">New!</p>
                                :null}
                                
                                {this.props.featured?
                                <p className="uppercase py-1 px-2 rounded-full bg-black font-bold text-white">featured</p>
                                :null}
                            </div>
                            <div className="position py-2 lg:py-0">
                                <p className="font-bold cursor-pointer hover:text-[#7B8E8E]">{this.props.position}</p>
                            </div>
                            <div className="date flex gap-2 items-center pb-4 lg:pb-0">
                                <p className="text-[#7B8E8E]">{this.props.postedAt}</p>
                                <span className="h-1 w-1 bg-[#7B8E8E] rounded-full my-auto"></span>
                                <p className="text-[#7B8E8E]">{this.props.contract}</p>
                                <span className="h-1 w-1 bg-[#7B8E8E] rounded-full my-auto"></span>
                                <p className="text-[#7B8E8E]">{this.props.location}</p>

                            </div>
                            
                        </div>
                        
                    </div>
                    
                    <div className="tag border-t pt-4 lg:pt-0 lg:border-0 flex-wrap lg:flex-nowrap flex lg:items-center gap-x-4 gap-y-3 ">
                        <p className="text-[#7B8E8E] font-bold p-2 bg-[#EEF6F6] rounded-md hover:text-white hover:bg-[#7B8E8E] cursor-pointer" onClick={() => this.props.Onclick_tag(this.props.role)}>{this.props.role}</p>
                        <p className="text-[#7B8E8E] font-bold p-2 bg-[#EEF6F6] rounded-md hover:text-white hover:bg-[#7B8E8E] cursor-pointer"onClick={() => this.props.Onclick_tag(this.props.level)}>{this.props.level}</p>
                        {this.props.languages.map(lang => 
                        <p className="text-[#7B8E8E] font-bold p-2 bg-[#EEF6F6] rounded-md hover:text-white hover:bg-[#7B8E8E] cursor-pointer"onClick={() => this.props.Onclick_tag(lang)}>{lang}</p>
                        )}
                        {this.props.tools.length?
                        this.props.tools.map(tool => 
                        <p className="text-[#7B8E8E] font-bold p-2 bg-[#EEF6F6] rounded-md hover:text-white hover:bg-[#7B8E8E] cursor-pointer"onClick={() => this.props.Onclick_tag(tool)}>{tool}</p> 
                        )
                        :null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
}

export default Card;