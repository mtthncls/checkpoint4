import ArtistsList from './ArtistsList';
import React from 'react'
import './Artists.css'

const Artists = () => (
    <div className="artists-profiles row justify-content-around">
        {ArtistsList.map(artist => (
            <article key={artist.familyName} className="artist-card col-12 col-md-4">
                <div className="modal fade" id={`${artist.firstName}${artist.familyName}Modal`} tabIndex="-1" role="dialog"
                    aria-labelledby={`${artist.firstName}${artist.familyName}ModalLabel`} aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-center w-100" id={`${artist.firstName}${artist.familyName}ModalLabel`}>{artist.firstName} {artist.familyName}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modale">
                                <div className="modal-body row justify-content-center align-items-center">
                                    <div className="col-12 col-md-6">
                                        <img className="w-100 rounded-circle modimg"
                                            src={`${artist.profilePic}`} alt={`${artist.firstName} ${artist.familyName}`} />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <p>A few words</p>
                                        <p className="text-justify">{artist.fewWords}</p>
                                        <div>
                                            <p>Skills</p>
                                            <p>{artist.skills}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div><div>
                    <img src={`${artist.profilePic}`} className="card-img-top rounded-circle test modimg"
                        alt={`${artist.firstName} ${artist.familyName}`} />
                </div>
                <div className="card-body border-0">
                    <h5 className="card-title font-weight-bold">{artist.firstName}<br />{artist.nickName}<br />{artist.familyName}</h5>
                    <a href="#" className="btn btn-primary" data-toggle="modal" data-target={`#${artist.firstName}${artist.familyName}Modal`}>Show More</a>
                </div>
            </article>
        ))
        }
    </div>
)


export default Artists;
