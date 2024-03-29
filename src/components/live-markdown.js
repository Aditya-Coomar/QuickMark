import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import copy from "copy-to-clipboard";
import { toast } from "react-toastify";

export default function LiveMarkdown() {
  const buttonType = [
    { index: 1, name: "heading" },
    { index: 2, name: "bold" },
    { index: 3, name: "italic" },
    { index: 13, name: "list-ul"},
    { index: 14, name: "list-ol"},
    { index: 4, name: "list-check" },
    { index: 5, name: "strikethrough" },
    { index: 6, name: "code" },
    { index: 7, name: "link" },
    { index: 8, name: "image" },
    { index: 9, name: "quote-left" },
    { index: 10, name: "ruler-horizontal" },
    { index: 12, name: "table" },
    { index: 11, name: "trash-can" },
  ];

  const [markdownInput, setMarkdownInput] = useState("## **This is a Markup Editor** \n ``` \n function mycode() { \n alert('Executed Successfully'); \n } \n ``` \n | Feature | Status | \n | ---- | --- | \n | Styles | Running | \n | Logic | Running | \n \n ***Developed by Aditya Coomar*** \n ![](https://images6.alphacoders.com/994/994929.jpg) \n \n **You may clear all and come up with something amazing to display**");
  const [html, setHtml] = useState("");

  function handleMarkdownButton(name) {
    if (name === "bold") {
      setMarkdownInput(markdownInput + " **Bold Text**");
    } else if (name === "italic") {
      setMarkdownInput(markdownInput + " *Italic Text*");
    } else if (name === "strikethrough") {
      setMarkdownInput(markdownInput + " ~~Strikethrough Text~~");
    } else if (name === "code") {
      setMarkdownInput(
        markdownInput +
          " \n ```\n function mycode(x) { \n this.x = test; \n } \n```"
      );
    } else if (name === "link") {
      setMarkdownInput(
        markdownInput +
          "  \n [This is a sample link and you may change the url](https://github.com/Aditya-Coomar)"
      );
    } else if (name === "image") {
      setMarkdownInput(
        markdownInput +
          " \n ![This is a sample image change url to change image](https://images6.alphacoders.com/994/994929.jpg)"
      );
    } else if (name === "heading") {
      setMarkdownInput(
        markdownInput +
          " \n # Heading 1 \n ## Heading 2 \n ### Heading 3 \n #### Heading 4 \n ##### Heading 5 \n ###### Heading 6"
      );
    } else if (name === "trash-can") {
      setMarkdownInput("");
    } else if (name === "list-check") {
      setMarkdownInput(
        markdownInput +
          " \n - [ ] List item 1 (Unchecked) \n - [x] List item 2 (Checked)"
      );
    } else if (name === "quote-left") {
      setMarkdownInput(markdownInput + " \n > This is a sample quote");
    } else if (name === "ruler-horizontal") {
      setMarkdownInput(markdownInput + " \n ---");
    } else if (name === "table") {
      setMarkdownInput(
        markdownInput +
          " \n | column 1 | column 2 | column 3 |   \n | ---- | --- | --- |  \n | row 1 | row 1 | row 1 |  \n | row 2 | row 2 | row 2 |  \n | row 3 | row 3 | row 3 |  \n"
      );
    } else if (name === "list-ul") {
      setMarkdownInput(
        markdownInput +
          " \n - List item 1 \n - List item 2 \n - List item 3"
      );
    } else if (name === "list-ol") {  
      setMarkdownInput(
        markdownInput +
          " \n 1. List item 1 \n 2. List item 2 \n 3. List item 3"
      );
    }
  }

  function copyMarkdownText() {
    if (markdownInput === "") {
      toast.info("Nothing to Copy!");
      return;
    }else{
    copy(markdownInput);
    toast.success("Copied Markdown Text!");}
  }

  function copyHtmlText() {
    if (html === "") {
      toast.info("Nothing to Copy!");
      return;
    }else{
    copy(html);
    toast.success("Copied as HTML");}
  }

  useEffect(() => {
    const el = document.querySelector(".preview-output");
    if (el) {
      const mdHTML = el.innerHTML;
      setHtml(mdHTML);
    }
  }, [markdownInput]);

  return (
    <div className="flex flex-wrap gap-4 justify-center p-5 mt-4">
      <div className="min-w-[300px] w-[600px] xl:w-[650px] 2xl:w-[750] z-10">
        <div className="w-full bg-slate-950 font-[Quicksand] text-xl md:text-2xl lg:text-3xl px-3 py-2 rounded-tr-md rounded-tl-md">
          <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent font-bold">
            {" "}
            Markup Editor{" "}
          </span>
        </div>
        <div className="bg-slate-950 text-sm sm:text-base md:text-lg">
          <div className="grid grid-cols-6 items-stretch gap-0 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent font-bold">
            {buttonType.map((button) => (
              <button
                className="p-1 text-center border-2 border-slate-900 hover:bg-gradient-to-r hover:from-teal-700 hover:to-cyan-700 hover:text-slate-950"
                type="button"
                key={button.index}
                title={button.name}
              >
                <i
                  class={`fa-solid fa-${button.name}`}
                  onClick={() => {
                    handleMarkdownButton(button.name);
                  }}
                ></i>
              </button>
            ))}
            <button
              className="p-1 col-span-2 text-center border-2 border-slate-900 hover:bg-gradient-to-r hover:from-teal-700 hover:to-cyan-700 hover:text-slate-950"
              type="button"
              title="copy-as-markdown"
              onClick={copyMarkdownText}
              ><span><i class="fa-brands fa-markdown"></i>&nbsp;</span> Copy Markdown</button>
            <button 
            className="p-1 col-span-2 text-center border-2 border-slate-900 hover:bg-gradient-to-r hover:from-teal-700 hover:to-cyan-700 hover:text-slate-950" 
            type="button" title="copy-as-html" onClick={copyHtmlText}><span><i class="fa-brands fa-html5"></i>&nbsp;</span> Copy as HTML</button>
            
          </div>
        </div>
        <textarea
          autoFocus
          className="w-full h-[300px] md:h-[600px] p-3 bg-black text-white overflow-auto font-[Montserrat]"
          value={markdownInput}
          onChange={(e) => setMarkdownInput(e.target.value)}
          placeholder="Enter markdown here..."
        ></textarea>
      </div>
      <div className="min-w-[300px] w-[600px] xl:w-[650px] 2xl:w-[750]">
        <div className="w-full bg-slate-950 font-[Quicksand] text-2xl md:text-3xl lg:text-4xl px-3 py-2 rounded-tr-md rounded-tl-md">
          <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent font-bold">
            {" "}
            Preview{" "}
          </span>
        </div>
        <div className="w-full h-[340px] md:h-[715px] bg-black text-white overflow-auto font-[Montserrat] p-3 text-base mt-[2px]">
          <ReactMarkdown
            className="prose-base preview-output"
            remarkPlugins={[remarkGfm]}
          >
            {markdownInput}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

