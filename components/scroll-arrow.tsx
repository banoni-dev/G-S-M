import React from 'react';


const ScrollArrow = () => {
    return (
      <div className="container flex justify-center items-center h-screen">
        <div className="chevron w-[2rem] h-[0.5rem] absolute after:content-['']  after:absolute after:w-[50%] after:h-[100%] after:bg-[#2c3e50] after:right-0 after:w-[50%] after:skew-y-[-30deg] before:absolute before:w-[50%] before:h-[100%] before:bg-[#2c3e50] before:left-0 before:skew-y-[30deg]" ></div>
      </div>
    );
  }

export default ScrollArrow;