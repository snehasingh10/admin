import React from 'react'
import { useParams } from 'react-router'
import { fileUploadApi } from 'src/network/Api';

export default function AddEpisode() {    
    const {id} = useParams()
    async function fileUploaded(e){
        e.preventDefault()
        const formData = new FormData()

        formData.append('seriesId', id)
        let subtitles = document.querySelectorAll('#subtitles > input')
        for(let i=0; i<subtitles.length; i++){ formData.append('subtitle', subtitles[i].files[0]) }
        let subLang = document.querySelectorAll('#subLangs > input')
        for(let i=0; i<subLang.length; i++){ formData.append('subLang', subLang[i].value) }
        formData.append('video', document.getElementById('video').files[0])
        formData.append('seasonNumber', document.getElementById('seasonNumber').value)
        formData.append('episodeNumber', document.getElementById('episodeNumber').value)
        const response = await fileUploadApi('/admin/add-episode', formData)
        alert(response.data.msg)
        e.target.reset()
    }
    return (
        <div>
            <form onSubmit={(e)=>{ fileUploaded(e) }} className="mx-auto col-md-6">
                <table className="w-100">
                    <tr>
                        <th>Season Number</th>
                        <td>
                            <input type="number" className="form-control" id="seasonNumber" required />
                        </td>
                    </tr>
                    <tr>
                        <th>Episode Number</th>
                        <td>
                            <input type="number" className="form-control" id="episodeNumber" required />
                        </td>
                    </tr>
                    <tr>
                        <th>Video</th>
                        <td>
                            <input type="file" className="form-control" id="video" required />
                        </td>
                    </tr>
                    <tr>
                        <th>Subtitles</th>
                        <td>
                            <div className="row">
                                <div id="subtitles" className="col-6">
                                    <input type="file" className="form-control" />
                                </div>
                                <div id="subLangs" className="col-6">
                                    <input type="text" placeholder="Choose Language" className="form-control" required />
                                </div>
                            </div>
                            <button onClick={()=>{
                                var temp = document.createElement('input')
                                temp.type = 'file'
                                temp.className = "form-control"
                                document.getElementById('subtitles').appendChild(temp)
                                var temp2 = document.createElement('input') 
                                temp2.type = 'text'
                                temp2.className = "form-control"
                                temp2.placeholder = "Choose Language"
                                temp2.required = true
                                document.getElementById('subLangs').appendChild(temp2)
                            }} type="button" className="btn btn-success pull-right">+</button>
                        </td>
                    </tr>
                </table>
                
                <input type="submit" className="btn btn-success mt-3" value="Add Episode" />
                {/* <input type="button" onClick={(e) => {fileUploaded(e)}} className="btn btn-success mt-3" value="Test" /> */}
            </form>
        </div>
    )
}
