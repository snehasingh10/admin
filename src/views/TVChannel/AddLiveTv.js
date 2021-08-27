import React from 'react'
import { fileUploadApi } from 'src/network/Api'

export default function AddLiveTv() {
    async function addLiveTv(e){
        e.preventDefault()
        const formData = new FormData()
        formData.append('tvLogo', document.getElementById('tvLogo').files[0])
        formData.append('name', document.getElementById('name').value)
        formData.append('url', document.getElementById('url').value)

        const response = await fileUploadApi('/admin/add-live-tv', formData)
        alert(response.data.msg)
        e.target.reset()
    }
    return (
        <div>
            <form onSubmit={(e)=>{ addLiveTv(e) }} className="mx-auto col-md-6 col-lg-4">
                <label>Select Logo From here</label>
                <input type="file" className="form-control" id="tvLogo" required />
                <input type="text" className="mt-3 form-control" id="name" placeholder="Enter Name" required />
                <input type="text" className="mt-3 form-control" id="url" placeholder="Enter URL" required />
                <input type="submit" value="Submit" className="mt-3 btn btn-success" />
            </form>
        </div>
    )
}
