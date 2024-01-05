import React from 'react'

const AllTreks = () => {
    const [destination, setDestination] = useState([]);
    const getData = async () => {
        try {
            let response = await axios.get('http://localhost:3005/api/v1/trip');
            setDestination(response.data?.data || []);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        getData()
    }, [])
  return (
    <div>
                {destination.map((item, index) => (
                    <div key={index}>
                        <p>Country: {item?.destination?.country}</p>
                    </div>
                ))}

            </div>
  )
}

export default AllTreks