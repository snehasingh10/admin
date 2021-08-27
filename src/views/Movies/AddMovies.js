import React from 'react'
import { fileUploadApi } from 'src/network/Api';
import {languages, genres} from 'src/network/arrays'
import MovieScrapper from './MovieScrapper';
import SearchCast from './SearchCast';

export default function AddMovies() {
    async function fileUploaded(e){
        e.preventDefault()
        const formData = new FormData()
        // subtitles
        // subLangs
        let subtitles = document.querySelectorAll('#subtitles > input')
        for(let i=0; i<subtitles.length; i++){ formData.append('subtitle', subtitles[i].files[0]) }
        let subLang = document.querySelectorAll('#subLangs > input')
        for(let i=0; i<subLang.length; i++){ formData.append('subLang', subLang[i].value) }
        formData.append('backdrop', document.getElementById('backdrop').files[0])

        let genresTemp = document.querySelectorAll('#genres option')
        const genres  = []
        for (let i = 0; i < genresTemp.length; i++) { if(genresTemp[i].selected) genres.push(genresTemp[i].value); }

        formData.append('genres', genres.join(','))

        formData.append('overview', document.getElementById('overview').value)
        formData.append('originalLanguage', document.getElementById('originalLanguage').value)
        formData.append('popularity', document.getElementById('popularity').value)
        formData.append('productionCompany', document.getElementById('productionCompany').value)
        formData.append('tagline', document.getElementById('tagline').value)
        formData.append('title', document.getElementById('title').value)
        formData.append('voteCount', document.getElementById('voteCount').value)
        formData.append('voteAverage', document.getElementById('voteAverage').value)
        formData.append('video', document.getElementById('video').files[0])
        formData.append('trailerPath', document.getElementById('trailerPath').value)
        formData.append('castDetail', document.getElementById('castDetail').value)
        formData.append('writer', document.getElementById('writer').value)
        formData.append('director', document.getElementById('director').value)
        formData.append('producer', document.getElementById('producer').value)
        if(document.getElementById('rent').value > 0){ formData.append('isRent', true) }
        else{ formData.append('isRent', false) }
        formData.append('rent', document.getElementById('rent').value)
        formData.append('grp', document.getElementById('grp').value)
        const response = await fileUploadApi('/admin/add-movie', formData)
        alert(response.data.msg)
        e.target.reset()
    }
    return (
        <div>
            <MovieScrapper />
            <form onSubmit={(e)=>{ fileUploaded(e) }} className="mx-auto col-md-6">
                <table className="w-100">
                    <tr>
                        <th>Background</th>
                        <td>
                            <input type="file" className="form-control" id="backdrop" required />
                        </td>
                    </tr>
                    <tr>
                        <th>Genres</th>
                        <td>
                            <select id="genres" required multiple className="form-control">
                                {
                                    genres.map((val, ind)=>{
                                        return (
                                            <option key={ind}>{val}</option>
                                        )
                                    })
                                }
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>Original Language</th>
                        <td>
                            <select className="form-control" id="originalLanguage" required>
                                {
                                    languages.map((val, ind)=>{
                                        return (
                                            <option key={ind}>{val}</option>
                                        )
                                    })
                                }
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>Overview</th>
                        <td>
                            <input type="text" className="form-control" id="overview" required />
                        </td>
                    </tr>
                    <tr>
                        <th>Popularity</th>
                        <td>
                            <input type="text" className="form-control" id="popularity" required />
                        </td>
                    </tr>
                    <tr>
                        <th>Production-Company</th>
                        <td>
                            <input type="text" className="form-control" id="productionCompany" required />
                        </td>
                    </tr>
                    <tr>
                        <th>Tagline</th>
                        <td>
                            <input type="text" className="form-control" id="tagline" required />
                        </td>
                    </tr>
                    <tr>
                        <th>Title</th>
                        <td>
                            <input type="text" className="form-control" id="title" required />
                        </td>
                    </tr>
                    <tr>
                        <th>Vote Count</th>
                        <td>
                            <input type="number" className="form-control" id="voteCount" required />
                        </td>
                    </tr>
                    <tr>
                        <th>Vote Average</th>
                        <td>
                            <input type="number" className="form-control" id="voteAverage" required />
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
                    <tr>
                        <th>Trailer Path</th>
                        <td>
                            <input type="text" className="form-control" id="trailerPath" required />
                        </td>
                    </tr>
                    <tr>
                        <th>Cast Detail</th>
                        <td>
                            <SearchCast />
                            <input type="text" className="form-control" id="castDetail" required readOnly />
                        </td>
                    </tr>
                    <tr>
                        <th>Writer</th>
                        <td>
                            <input type="text" className="form-control" id="writer" required />
                        </td>
                    </tr>
                    <tr>
                        <th>Director</th>
                        <td>
                            <input type="text" className="form-control" id="director" required />
                        </td>
                    </tr>
                    <tr>
                        <th>Producer</th>
                        <td>
                            <input type="text" className="form-control" id="producer" required />
                        </td>
                    </tr>
                    <tr>
                        <th>Rent</th>
                        <td>
                            <input type="number" className="form-control" id="rent" placeholder="Leave 0 if Free" required />
                        </td>
                    </tr>
                    <tr>
                        <th>Country Group</th>
                        <td>
                            <select className="form-control" id="grp" required>
                                <option value="1">Worldwide</option>
                                <option value="2">India Only</option>
                                <option value="3">SARCC Country</option>
                                <option value="4">Other</option>
                            </select>
                        </td>
                    </tr>
                </table>
                
                <input type="submit" className="btn btn-success mt-3" value="Add Movie" />
                {/* <input type="button" onClick={(e) => {fileUploaded(e)}} className="btn btn-success mt-3" value="Test" /> */}
            </form>
        </div>
    )
}
