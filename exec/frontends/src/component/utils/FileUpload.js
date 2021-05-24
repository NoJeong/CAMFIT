import React, { useState,useRef  } from 'react'
import { useDispatch } from "react-redux";

// import { imageshow, imageget } from "../../_actions/index";
// import { API_BASE_URL } from "../../constants";

// TOAST UI Editor import
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Viewer } from '@toast-ui/react-editor';


// TOAST UI Editor Plugins
// import 'tui-chart/dist/tui-chart.css';
// import chart from '@toast-ui/editor-plugin-chart';
// import 'highlight.js/styles/github.css';
// import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
// import 'tui-color-picker/dist/tui-color-picker.css';
// import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
// import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell';
// import uml from '@toast-ui/editor-plugin-uml';
// import editor from '@toast-ui/editor';


function FileUpload() {

    const [Content, setContent] = useState('뷰어')
    const dispatch = useDispatch()
    const editorRef = useRef()


    // const serContent = () => {
    //     setContent(editorRef.current.getInstance().getHTML())
    // }

    const btnClickListener = () => {
        const editorInstance = editorRef.current.getInstance()
        // console.log(editorInstance);
        // console.log('마크다운', editorInstance.getMarkdown());
        // console.log('html',editorInstance.getHtml());
        setContent(editorInstance.getHtml())
        // console.log(Content);


    }


    return (
        <div>
            {/* <input type="file" onChange={fileChangedHandler}/>
            <button onClick={uploadHandler}>Upload!</button>
            <div>
                <img 
                src={image} />
            </div> */}
            <Editor
            // onChange={descriptionChangeHandler}
            initialValue="내용을 입력해주세요."
            height="600px"
            width="300px"
            // plugins={[chart, codeSyntaxHighlight,colorSyntax,tableMergedCell,uml]}
            usageStatistics={false}
            ref={editorRef}
            />
            <Viewer
            height="500px"
            initialValue={Content}/>
            <button onClick={btnClickListener}>asdasd</button>
                <hr/>
                <div>    
                    <p>asdasdasdasdasdasd<img src="data:image/png;base64,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" alt="image"></img></p>           
                </div>
        </div>
    )
}

export default FileUpload
