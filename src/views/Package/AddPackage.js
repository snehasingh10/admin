import React from 'react'
import { commonApiWithValues } from 'src/network/Api'



export default function AddPackage() {
    async function addPackage(e){
        e.preventDefault()
        const data = {
            name: e.target[0].value,
            details: e.target[1].value,
            price: e.target[2].value,
            validDays: e.target[3].value
        }
        const response = await commonApiWithValues('/admin/add-package', data)
        alert(response.data.msg)
        e.target.reset()
    }
    return (
        <div>
            <form onSubmit={(e)=>{addPackage(e)}} className="mx-auto col-md-4 col-sm-6">
                <input type="text" placeholder="Name Of New Package" className="mt-3 form-control" required />
                <textarea rows='10' className="mt-3 form-control" placeholder="Details of new package. Feature points divided by '|'"></textarea>
                <input type="number" placeholder="Price Of New Package" className="form-control mt-3" required />
                <input type="number" placeholder="Valid Days Of New Package" className="form-control mt-3" required />
                <input type="submit" value="Add New Package" className=" btn btn-success mt-3" required />
            </form>
        </div>
    )
}
