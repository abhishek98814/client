import React, { useEffect, useState } from 'react'
import Perks from './Perks';
import TripOverview from './TripOverview';
import Image from './Image';
import { FaMountain } from "react-icons/fa";
import { MdNoMealsOuline } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
import axios from 'axios'
import FaqAnswer from './FaqAnswer';

const Overview = () => {
    const [title, setTitle] = useState('');
    const [tripDays, setTripDays] = useState(1);
    const [tripPrice, setTripPrice] = useState(1);

    const [tripDescription, setTripDescription] = useState('')
    const [mainImageUrl, setMainImageUrl] = useState('');
    const [gallery, setGallery] = useState([]);
    const [tripHighlights, setTripHighlight] = useState([])
    const [tripOverview, setTripOverView] = useState('')
    const [priceIncludes, setpriceInclude] = useState([])
    const [priceExcludes, setpriceExclude] = useState([])
    const [faq, setFaq] = useState('')
    const [itinerary, setItinerary] = useState([
        {
            day: '',
            description: '',
        },
    ]);
    // const [destination, setDestination] = useState({
    //     country: '',
    //     city: '',
    // });
    const [tripMap, setTripMap] = useState({
        mapImage: '',
    });
    const [tripVideo, setTripVideo] = useState({
        url: String
    });



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                title,
                tripDays,
                tripPrice,
                mainImageUrl,
                // tripDescription,
                // gallery,
                // tripMap,
                // tripVideo,
                // tripHighlights,
                // priceIncludes,
                // priceExcludes,
                // iternaryQuestion,
                // iternaryAnswer,
                // faq
            }
            const response = await axios.post('http://localhost:3005/api/v1/trip', data,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });
            console.log(response)

        } catch (err) {
            console.error('Error submitting form data:', err.message);
        }
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='flex rounded gap-2'>
                    <div className='w-2/4'>
                        <h2 className='text-md my-2'>Title</h2>
                        <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} className='border w-full gray-500 rounded' placeholder='title' />
                    </div>
                    <div className='w-1/4'>
                        <h2 className='text-md my-2'>Days</h2>
                        <input type="number" value={tripDays} onChange={ev => setTripDays(ev.target.value)} className='border gray-500 w-full rounded' placeholder='Days' />
                    </div>
                    <div className='w-1/4'>
                        <h2 className='text-md my-2'>Price</h2>
                        <input type="number" value={tripPrice} onChange={ev => setTripPrice(ev.target.value)} className='border gray-500 rounded w-full' placeholder='price' />
                    </div>
                </div>
                <h2 className='text-md mt-2'>Short Description</h2>
                <p className='text-gray-500 text-sm'></p>
                <textarea type="text" value={tripDescription} onChange={ev => setTripDescription(ev.target.value)} placeholder="address" className="border w-full rounded" />
                <div>
                    <div className='my-2 flex gap-4'>
                        <div className='gap-2 w-2/4'>
                            Upload video By Link
                            {/* <label className='flex gap-2'>
                                <input
                                    type="text"
                                    value={tripVideo.url}
                                    className="w-full py-2 rounded border"
                                    onChange={(ev) => setTripVideo({ url: ev.target.value })}
                                    placeholder={'Add using a link.... mp4'}
                                />
                                <button className='bg-blue-500 text-white px-4 rounded'>+</button>
                            </label> */}
                        </div>

                        <div className='flex gap-4'>
                            <div className='w-2/4'>
                                <span style={{ whiteSpace: 'nowrap' }} className='font-semibold'>
                                    Upload Location (map)
                                </span>
                                <label className='flex h-24 gap-2 justify-center items-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600 cursor-pointer'>
                                    {/* <input type="file" value={tripMap} onChange={ev => setTripMap(ev.target.value)} multiple className='hidden' /> */}
                                    <FaCloudUploadAlt />
                                    Upload
                                </label>
                            </div>
                            <div className='w-2/4'>
                                <span style={{ whiteSpace: 'nowrap' }} className='font-semibold'>
                                    Main Image
                                </span>
                                <label className='flex h-24 gap-2 justify-center items-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600 cursor-pointer'>
                                    <input type="file" onChange={ev => {
                                        // console.log(ev.target.files)
                                        setMainImageUrl(ev.target.files[0].name)
                                    }} multiple className='hidden' />
                                    <FaCloudUploadAlt />
                                    Upload
                                </label>
                            </div>

                            <div className='w-2/4'>
                                <span style={{ whiteSpace: 'nowrap' }} className='font-semibold'>
                                    Upload from device (Side)
                                </span>
                                <label className='flex h-24 gap-2 justify-center items-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600 cursor-pointer'>
                                    <input type="file" value={gallery} onChange={ev => setGallery(ev.target.value)} multiple className='hidden' />
                                    <FaCloudUploadAlt />
                                    Upload
                                </label>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <Perks />
                </div>
                <div className='my-3'>
                    <h2 className='text-md mt-0'>Trip Highlight</h2>
                    <label className='flex'>
                        <input type="text" value={tripHighlights} onChange={ev => setTripHighlight(ev.target.value)} className='rounded border mx-1 w-full' placeholder='Trip Highlight' />
                        <button className='bg-blue-500 px-4 py-1 rounded text-white'>+</button>
                    </label>
                </div>
                <div className='mb-16 '>
                    <h2>Trip Overview</h2>
                    <div className='my-4 w-full'>
                        <TripOverview />
                    </div>
                </div>
                <div className='my-3'>
                    <h2 className='text-md mt-0'>Price Includes</h2>
                    <label className='flex'>
                        <input type="text" value={priceIncludes} onChange={ev => setpriceInclude(ev.target.value)} className='rounded border mx-1 w-full' placeholder='Includes' />
                        <button className='bg-blue-500 px-4 py-1 rounded text-white'>+</button>
                    </label>
                </div>
                <div className='my-3'>
                    <h2 className='text-md mt-0'>Price Excludes</h2>
                    <label className='flex'>
                        <input type="text" value={priceExcludes} onChange={ev => setpriceExclude(ev.target.value)} className='rounded border mx-1 w-full' placeholder='Excludes' />
                        <button className='bg-blue-500 px-4 py-1 rounded text-white'>+</button>
                    </label>
                </div>
                <div className='my-3 w-full border bg-gray-100'>
                    <h1 className='font-semibold'>Iternary</h1>
                    <div className=''>
                        {/* <input type="text" value={iternaryQuestion} onChange={ev => setIternaryQuestion(ev.target.value)} className='w-full py-2 border px-4 mr-4' placeholder='day by day question' /> */}
                    </div>
                    <div className='my-4'>
                        <label className='py-4'>

                            <span className='gap-2'>
                                <span className='flex items-center gap-2'>
                                    <FaMountain />
                                    <h1>Max Altitude:</h1>
                                </span>
                                <input type="text" className='w-1/4 border rounded ' placeholder="place" />
                                <input type="number" className='w-1/4 border rounded mx-2' placeholder="Altitude" />
                            </span>
                            <div className='my-4  gap-2'>
                                <h1 className='my-2' style={{ whiteSpace: "nowrap" }}>Trek Owner Views:</h1>
                                {/* <textarea value={iternaryAnswer} onChange={ev => setIternaryAnswer(ev.target.value)} className='w-full border' placeholder='Trek Views'></textarea> */}
                            </div>
                            <div className='flex gap-2'>
                                <span>
                                    <p className=''>Stay Place</p>
                                    <input type="text" className='w-full border rounded ' placeholder="place" />
                                </span>
                                <span>
                                    <p className='px-8'>Meals</p>
                                    <input type="checkbox" className='w-full border  ' placeholder="Altitude" />
                                </span>
                            </div>
                        </label>
                    </div>
                </div>

                <div className='bg-gray-100 my-4'>
                    <h1 className='font-semibold'>FaQs</h1>
                    <div className='py-4'>
                        <span>
                            <h1>FaQs Question:</h1>
                            <input type="text" value={faq} onChange={ev => setFaq(ev.target.value)} className='w-full border py-4' placeholder='faq Question?..' />
                        </span>
                        <span>
                            <h1>FaQs Answer:</h1>
                            <FaqAnswer />
                        </span>
                    </div>
                </div>

                <button type='sumit' className='bg-blue-800 text-white py-2 rounded-xl my-4 w-full'>Save</button>
            </form>
        </div>
    )
}

export default Overview