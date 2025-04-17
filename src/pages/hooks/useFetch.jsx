// import { useState, useEffect } from "react"
// import React from "react"

// const useFetch = (url) => {
 
// let [load , setLoad] = useState(true)
// let [error , setError] = useState(false)
// let [data , setData] = useState(null)

// useEffect(()=>{
// fetch(url)
// .then((res)=>{
// return res.json()
// }).then((res)=>{
//     setData(res)
// }).catch((err)=>{
// setError(true)
// }).finally(()=>{
//     setLoad(false)
// })
// return [load , error , data]



// }, [])

// }

// export default useFetch
import { useState, useEffect } from "react";

const useFetch = (url) => {
  let [load, setLoad] = useState(true);
  let [error, setError] = useState(false);
  let [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoad(false);
      });
  }, [url]);

  return [load, error, data];
};

export default useFetch;
