import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
export default function CourseAssignment() {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent({ format: "text" }));
        }
    };
    return (
        <>
            <Editor
                apiKey='l74uba1h9wj5hnaa4yt58hog4atxzdoq7ipsdngzg021xy88'
                onInit={(_evt, editor) => editorRef.current = editor}
                // initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                    height: 300,
                    menubar: false,
                    plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                    branding: false
                }}
            />
            <div className='m-3 flex justify-end py-2'>
                <button onClick={log} className='px-7 py-2 text-white rounded-lg'
                    style={{ backgroundColor: "#611f69"}} >
                    Submit
                </button>
            </div >
        </>
    );
}
