import React, { useState } from 'react'
import { FaCloudUploadAlt } from "react-icons/fa";


const Image = () => {
    // const { action } = useParams();
    const [title, setTitle] = useState('');
    const [address, setAdress] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [photoLink, setPhotoLink] = useState('')
    const [description, setDescription] = useState('')
    const [perks, setPerks] = useState('')
    const [extraInfo, setExtraInfo] = useState('')
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [maxGuests, setMaxGuests] = useState(1)

    // useParams
    return (
        <div className='my-2 flex gap-4'>
            <div className='gap-2 w-2/4'>
                Upload video By Link
                <label className='flex gap-2'>
                    <input type="text" className="w-full py-2 rounded border" onChange={ev => setPhotoLink(ev.target.value)} placeholder={'Add using a link.... mp4'} />
                    <button className='bg-blue-500 text-white px-4 rounded'>+</button>
                </label>
            </div>

            <div className='flex gap-4'>
                <div className='w-2/4'>
                    <span style={{ whiteSpace: 'nowrap' }} className='font-semibold'>
                        Upload Location (map)
                    </span>
                    <label className='flex h-24 gap-2 justify-center items-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600 cursor-pointer'>
                        <input type="file" multiple className='hidden' />
                        <FaCloudUploadAlt />
                        Upload
                    </label>
                </div>
                <div className='w-2/4'>
                    <span style={{ whiteSpace: 'nowrap' }} className='font-semibold'>
                        Upload from device (Side)
                    </span>
                    <label className='flex h-24 gap-2 justify-center items-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600 cursor-pointer'>
                        <input type="file" multiple className='hidden' />
                        <FaCloudUploadAlt />
                        Upload
                    </label>
                </div>

                <div className='w-2/4'>
                    <span style={{ whiteSpace: 'nowrap' }} className='font-semibold'>
                        Upload from device (Side)
                    </span>
                    <label className='flex h-24 gap-2 justify-center items-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600 cursor-pointer'>
                        <input type="file" multiple className='hidden' />
                        <FaCloudUploadAlt />
                        Upload
                    </label>
                </div>

            </div>
        </div>
    )
}

export default Image