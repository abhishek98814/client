import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useQuill } from 'react-quilljs';



const Iternary = () => {
    const [value, setValue] = useState('');
    const { quill, quillRef } = useQuill();

    return (
        <div>
            {/* <ReactQuill theme="snow" value={value} onChange={setValue} /> */}

            <div style={{ width: 500, height: 300 }}>
                <div ref={quillRef} />
            </div>
        </div>
    )
}

export default Iternary