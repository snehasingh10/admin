import React from 'react'
import { fileUploadApi } from 'src/network/Api'

export default function AddPerson() {
    async function addPerson(e){
        e.preventDefault()
        const formData = new FormData()
        formData.append('personImage', document.getElementById('personImage').files[0])
        formData.append('name', document.getElementById('name').value)

        const response = await fileUploadApi('/admin/add-person', formData)
        alert(response.data.msg)
        e.target.reset()
    }
    return (
        <div>
            <form onSubmit={(e)=>{ addPerson(e) }} className="mx-auto col-md-6 col-lg-4">
                <label>Select Logo From here</label>
                <input type="file" className="form-control" id="personImage" required />
                Note: 480X630 Sized image will be shown proper [Only JPG, PNG, JPEG are supported]
                <input type="text" className="mt-3 form-control" id="name" placeholder="Enter Name" required />
                <input type="submit" value="Submit" className="mt-3 btn btn-success" />
            </form>
        </div>
    )
}
