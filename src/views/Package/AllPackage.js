import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import { commonApi, commonApiWithValues } from 'src/network/Api'


export default function AllPackage() {
    const [det, setDet] = useState({})
    const [deleteIndicator, setter] = useState(1)
    useEffect(()=>{
        async function init(){
            setDet(await commonApi('/global/packages'))
        }
        init()
    }, [deleteIndicator])


    async function deletePack(_id){
        await commonApiWithValues('/admin/delete-package', {_id}).then((response)=>{
            alert(response.data.msg)
            setter(deleteIndicator+1)
        }).catch((err)=>{
            alert(err.message)
        })
    }
    return(
        <Table singleLine>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Details</Table.HeaderCell>
                    <Table.HeaderCell>Price</Table.HeaderCell>
                    <Table.HeaderCell>Valid Days</Table.HeaderCell>
                    <Table.HeaderCell>Delete</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    (det.hasOwnProperty('data'))?
                        (
                            det.data.data.map((val, ind)=>{
                                return(
                                    <Table.Row key={ind}>
                                        <Table.Cell>{val.name}</Table.Cell>
                                        <Table.Cell>{val.details}</Table.Cell>
                                        <Table.Cell>{val.price}</Table.Cell>
                                        <Table.Cell>{val.validDays}</Table.Cell>
                                        <Table.Cell><i onClick={()=>{ deletePack(val._id) }} className="fa fa-trash btn btn-danger"></i></Table.Cell>
                                    </Table.Row>

                                )  
                            })
                        )
                    :
                        ""
                }
            </Table.Body>
        </Table>
    )
}