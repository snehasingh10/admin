import React, { useEffect, useState } from 'react'
import { commonApi, commonApiWithValues } from 'src/network/Api'

export default function UpdateCat() {
    const [homeCards, setCards] = useState([])
    const [set, setter] = useState(1)
    useEffect(()=>{
        async function init(){
            setCards(await commonApi('/global/get-objects'))
        }
        init()
    }, [set])
    async function updatePrio(e, newPrioIndex, oid){
        e.preventDefault()
        console.log(await commonApiWithValues('/admin/update-object', {
            newPrio: parseInt(document.getElementById('prioChangingIndex_' + newPrioIndex).value),
            oid: oid
        }))
        setter(set+1)
        let forms  = document.getElementsByClassName('formToReset')
        for(let i=0;i<forms.length;i++){
            forms[i].reset()
        }
    }
    return (
        <div className="col">
            {
                (homeCards.hasOwnProperty('data'))?
                homeCards.data.data.map((value, index)=>{
                    return(
                        <form onSubmit={(e)=>{ updatePrio(e, (index+1), value._id) }} key={index} className="formToReset border mt-3 row">
                            <div className="col-md-6">
                                <h5>{value.title}</h5>
                                {JSON.stringify(value.toogleOption)}
                            </div>
                            <div className="col-md-6 d-flex my-auto">
                                <input id={"prioChangingIndex_"+(index+1)} className="form-control" type="number" placeholder="As Low as high" required defaultValue={value.prio} />
                                <button className="btn btn-success" type="submit"><i className="fa fa-pencil"></i></button>
                            </div>
                        </form>
                    )
                })
                :""
            }
        </div>
    )
}
