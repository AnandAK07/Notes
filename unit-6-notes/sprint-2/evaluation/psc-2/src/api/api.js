export const getData=async(data,setData,loading,setLoading,error,setError)=>{
    try {
        setLoading(true);
        const res=await fetch(`http://localhost:8080/products`);
        const jsonData=await res.json();
        console.log(jsonData);
        setData(jsonData);
        setLoading(false);
    } catch (error) {
        // console.log(error);
        // setLoading(false);
        setError(true);
    }
};