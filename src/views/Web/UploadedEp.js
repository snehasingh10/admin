import React, { useEffect, useState } from 'react'
import { commonApi } from 'src/network/Api'

export default function UploadedEp(props) {
    const [det, setDet] = useState({})
    useEffect(()=>{
        async function init(){
            setDet(await commonApi('/global/get-episodes/'+props.id))
        }
        init()
    }, [props.id])
    return (
        <div>
            <i className="fa fa-eye btn btn-info" onClick={()=>{ document.getElementById('eps@'+props.id).classList.toggle('d-none') }}></i><br />
            <div className="d-none" id={'eps@'+props.id}>
                {
                    det.hasOwnProperty('data')?
                        det.data.data.map((val,ind)=>{
                            console.log(val)
                            return(
                                <p key={ind}>{'Season ' + val.seasonNumber + ' Episode ' + val.episodeNumber}</p>
                            )
                        })
                    :
                    ""
                }
            </div>
            
        </div>
    )
}
