import React from 'react'
import { Layouts } from '../../components/Layouts'
import { Biz } from '../../components/BizHaqimizda'

export const BizHaqimizda = () => {

  // let getToken = localStorage.getItem("token");

  // window.addEventListener("click", function (e) {
  //   e.preventDefault();

  //   if (!getToken) {
  //     window.location.href = "/login";
  //   }
  // });
  
  return (
    <Layouts>
      {
        <Biz/>
      }
    </Layouts>
  )
}
