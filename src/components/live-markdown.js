import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function LiveMarkdown() {
  const buttonStyle = "p-1 text-center border-2 border-slate-900 hover:bg-gradient-to-r hover:from-teal-700 hover:to-cyan-700 hover:text-slate-950";
  const [markdownInput, setMarkdownInput] = useState("");
  const updateMarkdown = (e) =>{
    setMarkdownInput(markdownInput + "# Hello World");
  }
  return (
    <div className="flex flex-wrap gap-4 justify-center p-5 mt-4">
      <div className="min-w-[300px] w-[600px] z-10">
        <div className="w-full bg-slate-950 font-[Quicksand] text-xl md:text-2xl px-3 py-1 rounded-tr-md rounded-tl-md">
          <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent font-bold">
            {" "}
            Markup Editor{" "}
          </span>
        </div>
        <div className="bg-slate-950 text-sm sm:text-base md:text-lg">
          <div className="grid grid-cols-8 items-stretch gap-0 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent font-bold">
            <button className={`border-l-0 ${buttonStyle}`} type="button" value={"heading"} onClick={updateMarkdown}><i class="fa-solid fa-heading"></i></button>
            <button className={buttonStyle} type="button"><i class="fa-solid fa-bold"></i></button>
            <button className={buttonStyle} type="button"><i class="fa-solid fa-italic"></i></button>
            <button className={buttonStyle} type="button"><i class="fa-solid fa-underline"></i></button>
            <button className={buttonStyle} type="button"><i class="fa-solid fa-strikethrough"></i></button>
            <button className={buttonStyle} type="button"><i class="fa-solid fa-code"></i></button>
            <button className={buttonStyle} type="button"><i class="fa-solid fa-link"></i></button>
            <button className={`border-r-0 ${buttonStyle}`} type="button"><i class="fa-solid fa-image"></i></button>
          </div>
        </div>
        <textarea
          autoFocus
          className="w-full h-[300px] md:h-[500px] p-3 bg-slate-900 text-white overflow-auto font-[Montserrat]"
          value={markdownInput}
          onChange={(e) => setMarkdownInput(e.target.value)}
          placeholder="Enter markdown here..."
        ></textarea>
      </div>
      <div className="min-w-[300px] w-[600px]">
        <div className="w-full bg-slate-950 font-[Quicksand] text-xl md:text-2xl px-3 py-1 rounded-tr-md rounded-tl-md">
          <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent font-bold">
            {" "}
            Preview{" "}
          </span>
        </div>
        <div className="w-full h-[300px] md:h-[500px] bg-slate-900 text-white overflow-auto font-[Montserrat] p-3 text-base">
          <ReactMarkdown className="prose-base" remarkPlugins={[remarkGfm]}>
            {markdownInput}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

/*
const MarkComponent = ({ value }) => {
  return (
    <div className="text-white">
      { value }
    </div>
    );
};
*/

/* 

# **This is a test**
```
function mycode(x) {
    this.x = test;
}
```
*Hello this is my first test for Markup Editor*
![](https://sourcebae.com/blog/wp-content/uploads/2023/08/6.png)

*/
