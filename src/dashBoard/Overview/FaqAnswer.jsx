import React, { useState } from 'react'
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

const FaqAnswer = () => {
    const { quill, quillRef } = useQuill();
    return (
        <div>
            <div>
                <div style={{ height: 200 }}>
                    <div ref={quillRef} />
                </div>
            </div>
        </div>
    )
}

export default FaqAnswer