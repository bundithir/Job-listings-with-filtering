import React from "react";     

class Field extends React.Component{
    render(){
        if(this.props.tags.length){
            return (
                <div className="px-[2rem] mb-[2rem]">
                    <div className="lg:p-[2rem] p-[1rem] mx-auto bg-white shadow-xl rounded-lg container flex justify-between items-center">
                        <div className="flex flex-wrap gap-x-4 gap-y-3 lg:flex-nowrap lg:items-center">
                        {this.props.tags.map(tag =>( 
                            <div className="flex h-[40px] gap-0 items-center">
                                <p className="text-[#7B8E8E] p-2 bg-[#EEF6F6] rounded-l-md">{tag}</p>
                                <div className="flex justify-center items-center rounded-r-md bg-[#7B8E8E] h-[40px] w-[32px] cursor-pointer hover:bg-[#2C3A3A]" onClick={() => this.props.remove(tag)}>
                                    <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path  fill-rule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"/></svg>
                                </div>
                                
                            </div>
                        ))}
                        </div>
                        <div className="clear">
                            <p className="font-bold cursor-pointer text-[#7B8E8E] hover:underline" onClick={this.props.clear}>Clear</p>
                        </div>
                    </div>
                </div>
            );
        }
        else{
            return null;
        }
    }
}

export default Field;