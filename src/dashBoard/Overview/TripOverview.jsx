import React, { useState } from 'react'
// import './overview.css'
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

const TripOverview = () => {
    const { quill, quillRef } = useQuill();


    return (
        <div>
            <div style={{ height: 200 }}>
                <div ref={quillRef} />
            </div>
        </div>
    )
}

export default TripOverview