import React from 'react';
import './Trending.styles.css'
import SearchIcon from '@mui/icons-material/Search';
import testdata from '../../Components/testdata';
import { margin } from '@mui/system';

const Trending = () => {
    return (
        <div className='trencont'>
            <div className='input'>
                <label className='searchicon' for="mainsearch">
                    <SearchIcon sx={{color: '#71767b'}}/>
                </label>
                <input className='thotSearch' name="mainSearch" id="mainsearch" type='text' placeholder="Search FOS..."></input>
            </div>
            <div className='trendingsection'>
                <h2 className='trendingheader'>What's happening</h2>
                <div>
                {
                    testdata.map(element => {
                        return (
                            <div className='trendiv'>
                                <span style={{color: 'gray', fontSize: "13px"}}>Trending</span>
                                <span>{element.hashtag}</span>
                                <span style={{color: 'gray', fontSize: "13px"}}>{element.posts.length} thots</span>
                            </div>
                        )
                    })
                }
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Trending;