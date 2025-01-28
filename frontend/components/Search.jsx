import { useEffect, useState } from "react";

function Search() {
    const [meter , setMeter] = useState('');
    const [email , setEmail] = useState('');
    const [data , setData] = useState([]);

    // useEffect(() => {

    //     const fetchData = async () => {
    //         try {
    //             const fetching = await fetch('http://localhost:3000/meter/get');
    //             if(!fetching.ok){
    //                 console.log('Error during fetching data');                    
    //             }
    //             const fetchedData = await fetching.json();
    //             setData(fetchedData.data);                
                
    //         } catch (error) {
    //             console.log("error",error.status);
    //         }



    //     }
    //     fetchData();
    //     console.log(data);
        

    // },[])

    // const changeHandlerMeter = (e) =>{
    //     setMeter(e.target.value);
    // }
    // const changeHandlerEmail = (e) =>{
    //     setEmail(e.target.value);
    // }

    // const submitHandler = async (e) =>{
    //     e.preventDefault();
    //     // console.log(meter);
    //     // console.log(email);

        




    //     // try {
    //     //     const response = await fetch('http://localhost:3000/meter/get');
    //     //     if(!response.ok){
    //     //         throw new Error({
    //     //             message:'Error while fetching data',
    //     //             error:response.status,
    //     //         })
    //     //     }

    //     //     const fetchedData = await response.json();
    //         // setData(fetchedData.data);

    //         setEmail('');
    //         setMeter('');
    //         // console.log(fetchedData.data[0]._id);
    //         // console.log(data);
    //         // {
    //         //     data.map((x) => {
    //         //         <ul>
    //         //             <li>{x._id}</li>
    //         //         </ul>
    //         //     })
        
    //         // }
            

    //     // }catch(error){
    //     //     console.log('Error',error);
    //     // }
    // }


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:3000/meter/get');
            if (!response.ok) {
              console.error('Error during fetching data');
              return;
            }
            const fetchedData = await response.json();
            setData(fetchedData.data); // Corrected: Use `fetchedData` instead of `fetchData`
          } catch (error) {
            console.error("Error:", error);
          }
        };
    
        fetchData();
      }, []); // Runs once when the component mounts
    
      useEffect(() => {
        console.log("Updated Data:", data); // Log updated data after `setData`
      }, [data]); // Runs every time `data` changes
    
      const changeHandlerMeter = (e) => {
        setMeter(e.target.value);
      };
    
      const changeHandlerEmail = (e) => {
        setEmail(e.target.value);
      };
    
      const submitHandler = (e) => {
        e.preventDefault();
        console.log("Meter:", meter, "Email:", email);
    
        // Reset form fields
        setEmail('');
        setMeter('');
      };

    return (
    <>
    <form >
        <fieldset>
        <legend>Data</legend>
            <div>
                <label htmlFor='meterNo'>MeterId </label>

                <input value={meter} 
                name='meterNo' 
                type='text' 
                onChange = {changeHandlerMeter}>
                    
                </input>
            </div>

            <div>
                <label htmlFor='Email'>Email </label>

                <input value={email}
                name='Email' 
                type='text' 
                onChange = {changeHandlerEmail}>

                </input>

            </div>
            <button type='submit' 
            onClick={submitHandler}>
            Submit
            </button>

            

        </fieldset>       
    </form>
    
    </>
  )
}

export default Search;
