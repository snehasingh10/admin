import React from 'react'
import { fileUploadApi } from 'src/network/Api';

export default function AddMusic() {

    async function fileUploaded(e){
        e.preventDefault();
        const formData = new FormData()
        formData.append('title', document.getElementById('title').value)
        formData.append('belongsTo', document.getElementById('belongsTo').value)
        formData.append('video', document.getElementById('video').files[0])
        formData.append('backdrop', document.getElementById('backdrop').files[0])
        const response = await fileUploadApi('/admin/add-song', formData)
        alert(response.data.msg)
        e.target.reset()
    }
    return (
        <div>
            <form onSubmit={(e)=>{ fileUploaded(e) }} className="mx-auto col-lg-4 col-md-6">
                <input type="text" className="form-control mt-3" id="title" placeholder="Enter Title Here" required />
                <input type="text" className="form-control mt-3" id="belongsTo" placeholder="Enter Movie Name Here" required />
                <label className="mt-3">Video [mp4 / mkv]</label>
                <input type="file" className="form-control" id="video" required />
                <label className="mt-3">Background [JPG / PNG / JPEG]</label>
                <input type="file" className="form-control" id="backdrop" required />
                <input type="submit" className="btn btn-success mt-3" value="Add Music" />
            </form>
        </div>
    )
}
