import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import { backURL, commonApi, commonApiWithValues } from 'src/network/Api'


export default function AllPerson() {
    const [det, setDet] = useState({})
    const [set, setter] = useState(1)
    useEffect(()=>{
        async function init(){
            setDet(await commonApi('/global/get-person'))
        }
        init()
    }, [set])

    async function searchMovie(){
        setDet(await commonApiWithValues('/global/search-person', 
            { name: document.getElementById('searchField').value }
        ))
    }


    async function allUnspecial(){
        await commonApi('/admin/all-unspecial')
        setter(set+1)
    }
    async function oneSpecial(id){
        await commonApi('/admin/one-special/'+id)
        setter(set+1)
    }
    return(
        <>
            <div className="d-flex justify-content-center pb-5">

                <input type="text" className="form-control" placeholder="Search From Here" id="searchField" />
                <i className="fa fa-search btn btn-info" onClick={()=>{ searchMovie() }} ></i>
            </div>
            <button className="pull-right btn btn-danger mb-3" onClick={()=>{allUnspecial()}}>Make All Unspecial</button>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Photo</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Make Special</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        (det.hasOwnProperty('data'))?
                            (
                                det.data.data.map((val, ind)=>{
                                    return(
                                        <Table.Row key={ind}>
                                            <Table.Cell className="my-auto"><img height="100" src={backURL + val.photoPath} alt={val.name + '@TFlix'} /></Table.Cell>
                                            <Table.Cell className="my-auto">{val.name}</Table.Cell>
                                            <Table.Cell>
                                                {
                                                    (val.special !== true)?
                                                        <button onClick={()=>{oneSpecial(val._id)}} className="btn btn-success">Special</button>
                                                    :""
                                                }
                                            </Table.Cell>
                                        </Table.Row>
                                    )  
                                })
                            )
                        :
                            ""
                    }
                </Table.Body>
            </Table>
        </>
    )
}