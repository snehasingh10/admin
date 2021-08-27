import React, { useState } from 'react'
import { commonApiWithValues } from 'src/network/Api'

export default function SearchCast() {
    const [det, setDet] = useState({})
    async function searchMovie(){
        setDet(await commonApiWithValues('/global/search-person/', {name: document.getElementById('searchField').value}))
    }
    const opCast = []
    return (
        <>
            <div className="d-flex justify-content-center">
                <input type="text" className="form-control" placeholder="Search From Here" id="searchField" />
                <i className="fa fa-search btn btn-info" onClick={()=>{ searchMovie() }} ></i>
            </div>
            <div style={{height: '100px', overflowX: 'scroll'}} className="w-100 border">
                {
                    det.hasOwnProperty('data')?
                        det.data.data.map((val, ind)=>{
                            return(
                                <div onClick={()=>{
                                    opCast.push(val._id)
                                    document.getElementById('castDetail').value = opCast.join(',') 
                                }} key={ind} className="border">{val.name}</div>
                            )
                        })
                    :
                    ""
                }
            </div>
        </>
    )
}
