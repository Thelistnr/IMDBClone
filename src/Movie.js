import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Host from "./Host";
import trail from "./Assets/Trailer.svg"
import star from "./Assets/Star.svg"
import ticks from "./Assets/Two Tickets.svg"
import list from "./Assets/List.svg"
import logo from "./Assets/LogoIcon.svg"

const getImageURL = (posterPath) => {
    return `https://image.tmdb.org/t/p/original${posterPath}`
}

const Movie = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState();
    useEffect(() => {
        const url = Host + `movie/${id}?language=en-US`;
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODc1MDYxNjAwY2NhMjc5NTVkMmQ5OTJjZjI3OGFlNSIsInN1YiI6IjY1MDA3YWFjNTU0NWNhMDBmZWE2YWIxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LgiAwGSfKagR8aC52Dy-pdsKYrZDTzYXz7vF_WmBiqs")
        myHeaders.append("Content-Type", "application/json")

        fetch(url, {
            headers:myHeaders
        })
            .then((res) => {
                if(!res.ok){
                    throw Error('error');
                }
                return res.json();
            })
            .then((data) => {
                
                setMovie(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])
    return ( 
        <div className="movie">
            <div className="wrap" style={{display:'flex'}}>
                <div className="sideBar" style={{width:'20%', border:'1px solid gray', borderTopRightRadius:'50px', borderBottomRightRadius:'50px', height:'100vh', position:'sticky'}}>
                    <Link to='/' style={{display:'flex', textDecoration:'none', margin:'50px 40px'}}>
                            <div className="logo"><img src={logo} alt="" /></div>
                            <p className="nam" style={{margin:'10px 0 0 30px', color:'Black', fontSize:'x-large'}}>MOVIEBOX</p>
                    </Link>

                </div>
                {movie && <div className="details" style={{width:'80%', margin:'30px 30px 30px 20px'}}>
                    <div className="banner" style={{backgroundImage:`url("${getImageURL(movie.backdrop_path)}")`, backgroundSize:'100%', width:'100%', height:'400px', borderRadius:'10px', display:'flex', justifyContent:'center', alignItems:'center'}}> <div className="shade" style={{position:'absolute', backgroundColor:'rgba(0,0,0,0.6)', width:'78%', height:'400px', borderRadius:'10px'}}></div> <img src={trail} alt=""  style={{zIndex:'100'}}/></div>
                    <div className="namDets" style={{display:'flex', justifyContent:'space-between', margin:'20px 0'}}>
                        <div className="dets" style={{display:'flex', fontWeight:'bold'}}>
                            <h3 className="name" data-testid="movie-title" style={{margin:'0 10px'}}>{movie.original_title}</h3>•
                            <h3 className="year" data-testid="movie-release-date" style={{margin:'0 10px'}}>{movie.release_date}</h3>•
                            <h3 className="duration" data-testid="movie-runtime" style={{margin:'0 10px'}}>{movie.runtime}m</h3>
                        </div>
                        <div className="rating" style={{display:'flex', margin:'0 10px 0 0'}}>
                            <img src={star} alt="" />
                            <h3 style={{margin:'3px 0 0 5px'}}>0 | 0</h3>
                        </div>

                    </div>
                    <div className="ovbut" style={{display:'flex', justifyContent:'space-between'}}>
                        <div className="over" data-testid="movie-overview" style={{width:'82%'}}>{movie.overview}</div>
                        <div className="buttons">
                            <button className="showtime" style={{padding:'5px 50px', border:'0', display:'flex', backgroundColor:'#BE123C', borderRadius:'10px', cursor:'pointer'}}><img src={ticks} alt="" /> <p style={{margin:'5px 0 0 0', color:'white'}}>See Showtimes</p></button>
                            <button className="showtime" style={{padding:'8px 53px', border:'0', display:'flex', backgroundColor:'rgba(190, 18, 60, 0.1)', borderRadius:'10px', margin:'5px 0', cursor:'pointer'}}><img src={list} alt="" /> <p style={{margin:'5px 0 0 0', color:'black'}}>See Showtimes</p></button>
                        </div>
                    </div>
                </div>}

            </div>
        </div>
     );
}
 
export default Movie;