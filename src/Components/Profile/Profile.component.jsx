import React from "react";
import test from '../../Json Data/users.data';
import './profile.styles.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import verified from '../../Assets/FOS logo.svg';
import { height, width } from "@mui/system";

function Profile() {
    return (
        <div className="pmid">
            <div className="header">
                <span className="useridh">{test.userid}
                {
                    (test.verified) ? <span>
                            <img src={verified} alt='' style={{height: "20px", width: '20px', marginLeft: '10px', marginTop: '4px'}} /> 
                        </span>: <span></span>
                }
                </span>
                <div className="tthots">{test.thots.length} Thots</div>
                <hr style={{width: "100%"}} />
            </div>
            <div className="mbody">
                <img src={test.pfp} alt='' className="avatar" />
                <div className="labelid">
                    <span className="userid">{test.userid}</span>
                    <span className="username"> @{test.username}</span><br /><br />
                    <span className="bio">{test.bio}</span><br /><br />
                    <span className="ff">{test.followers.length}</span>
                    <span className="flabel"> followers |</span>
                    <span className="ff"> {test.following.length}</span>
                    <span className="flabel"> following</span><br /><br />
                    <div className="locjoi">
                        <span style={{marginRight: "10px"}}>
                            <LocationOnIcon sx={{fontSize: "12px", marginRight:"5px"}} />
                            <span className="flabel loc">
                                {test.city}, 
                            </span>
                            <span className="flabel loc">
                                {test.country}
                            </span>
                        </span>
                        <span>
                            <DateRangeIcon sx={{fontSize: "12px", marginRight: "5px"}} />
                            <span className="flabel loc">
                                Joined {test.joiningDate}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
            <br />
            <div className="pnavbar">
                <button className="items">
                    Thots
                </button>
                <button className="items">
                    Thots and replies
                </button>
                <button className="items">
                    Likes
                </button>
            </div>
            
        </div>
    )
}

export default Profile
