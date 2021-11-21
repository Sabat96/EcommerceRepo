import React from "react";
import { useGetcategoryByNameQuery } from "../services/ProductsApi";


export default function Home() {
   const { data, error, isLoading } = useGetcategoryByNameQuery('')
   if (isLoading){
       return   <div> isLoding.......</div>

  }
  if (data){
  //  return <div> {JSON.stringify(data)}</div>

}
  return (
    <div>
      {
      /* <h1> Home page</h1>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{user.email}</p>

      <ChangeColor /> */}
    </div>
  );
}
