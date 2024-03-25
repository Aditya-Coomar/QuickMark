import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function LiveMarkdown() {

  const buttonType = [
    { index: 1, name: "heading" },
    { index: 2, name: "bold" },
    { index: 3, name: "italic" },
    { index: 5, name: "strikethrough" },
    { index: 6, name: "code" },
    { index: 7, name: "link" },
    { index: 8, name: "image" },
    { index: 9, name: "trash-can" },
  ];
  
  const [markdownInput, setMarkdownInput] = useState("");
  const handleMarkdownButton = (name) => {
    if (name === "bold") {
      setMarkdownInput(markdownInput + "**Bold Text**");
    } else if (name === "italic") {
      setMarkdownInput(markdownInput + "*Italic Text*");
    } else if (name === "strikethrough") {
      setMarkdownInput(markdownInput + "~~Strikethrough Text~~");
    } else if (name === "code") {
      setMarkdownInput(
        markdownInput +
          "```\n function mycode(x) { \n this.x = test; \n } \n```"
      );
    } else if (name === "link") {
      setMarkdownInput(markdownInput + "[This is a sample link change link to change image](https://sourcebae.com)");
    } else if (name === "image") {
      setMarkdownInput(
        markdownInput +
          "![This is a sample image change url to change image](https://sourcebae.com/blog/wp-content/uploads/2023/08/6.png)"
      );
    } else if (name === "heading") {
      setMarkdownInput(
        markdownInput +
          "# Heading 1 \n ## Heading 2 \n ### Heading 3 \n #### Heading 4 \n ##### Heading 5 \n ###### Heading 6"
      );
    } else if (name === "trash-can") {
      setMarkdownInput("");
    }
  };

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
            {buttonType.map((button) => (
              <button
                className="p-1 text-center border-2 border-slate-900 hover:bg-gradient-to-r hover:from-teal-700 hover:to-cyan-700 hover:text-slate-950"
                type="button"
                key={button.index}
              >
                <i
                  class={`fa-solid fa-${button.name}`}
                  onClick={() => {
                    handleMarkdownButton(button.name);
                  }}
                ></i>
              </button>
            ))}
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
        <div className="w-full h-[340px] md:h-[540px] bg-slate-900 text-white overflow-auto font-[Montserrat] p-3 text-base">
          <ReactMarkdown className="prose-base" remarkPlugins={[remarkGfm]}>
            {markdownInput}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
