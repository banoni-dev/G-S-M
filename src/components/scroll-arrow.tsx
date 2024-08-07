import React from 'react';


const ScrollArrow = () => {
    return (
      <div className="container flex justify-center items-center h-[120px] mt-[-80px]">
        <div className="chevron w-[2rem] h-[0.5rem] absolute after:content-['']  after:absolute after:w-[50%] after:h-[100%] after:bg-[#2c3e50] after:right-0 after:w-[50%] after:skew-y-[-30deg] before:absolute before:w-[50%] before:h-[100%] before:bg-[#2c3e50] before:left-0 before:skew-y-[30deg] scale-50 animate-[chevron_3s_ease-out_1s_infinite] opacity-0" ></div>

        <div className="chevron w-[2rem] h-[0.5rem] absolute after:content-['']  after:absolute after:w-[50%] after:h-[100%] after:bg-[#2c3e50] after:right-0 after:w-[50%] after:skew-y-[-30deg] before:absolute before:w-[50%] before:h-[100%] before:bg-[#2c3e50] before:left-0 before:skew-y-[30deg] scale-50 animate-[chevron_3s_ease-out_infinite] opacity-0" ></div>

        <div className="chevron w-[2rem] h-[0.5rem] absolute after:content-['']  after:absolute after:w-[50%] after:h-[100%] after:bg-[#2c3e50] after:right-0 after:w-[50%] after:skew-y-[-30deg] before:absolute before:w-[50%] before:h-[100%] before:bg-[#2c3e50] before:left-0 before:skew-y-[30deg] scale-50 animate-[chevron_3s_ease-out_2s_infinite] opacity-0" ></div>
      </div>
    );
  }

export default ScrollArrow;