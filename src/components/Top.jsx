import React from "react";

class Top extends React.Component{
    render(){
        return(
            <div className="mb-[4rem]">
                <img src='./images/bg-header-mobile.svg' alt="header-mobile" className="md:hidden w-full bg-[#5BA4A4]"/>
                <img src='./images/bg-header-desktop.svg' alt="header-desktop" className="w-full bg-[#5BA4A4] md:block hidden" />
            </div>
        );
    }
}
export default Top ;