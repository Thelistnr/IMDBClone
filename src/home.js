import { useEffect, useState } from "react";
import Host from "./Host";
import IMDB from "./Assets/IMDBIcon.svg"
import TMT from "./Assets/TMTIcon.svg"
import Play from "./Assets/Play.svg"
import logo from "./Assets/LogoIcon.svg"
import menu from "./Assets/Menu.svg"
import search from "./Assets/Search.svg"
import dash from "./Assets/Rectangle 1.svg"
import fav from "./Assets/Favorite.svg"
import redFav from "./Assets/HeartIcon.svg"
import { Link } from "react-router-dom";

const HOME = () => {
    const [items, setItems] = useState();
    const [movies, setMovies] = useState();
    const [input, setInput] = useState();
    const [first, setFirst] = useState(true);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    const [fourth, setFourth] = useState(false);
    const [fifth, setFifth] = useState(false);
    const [red, setRed] = useState(false);
    const [isPending, setIsPending] = useState(false);

    const getPosterURL = (posterPath) => {
        return `https://www.themoviedb.org/t/p/w880_and_h600_multi_faces_filter(duotone,00192f,00baff)${posterPath}`
    }
    const getImgURL = (posterURL) => {
        return `https://image.tmdb.org/t/p/w220_and_h330_face${posterURL}`
    }

    useEffect(() => {
        const conUrl = Host + 'movie/top_rated?language=en-US&page=1';
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODc1MDYxNjAwY2NhMjc5NTVkMmQ5OTJjZjI3OGFlNSIsInN1YiI6IjY1MDA3YWFjNTU0NWNhMDBmZWE2YWIxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LgiAwGSfKagR8aC52Dy-pdsKYrZDTzYXz7vF_WmBiqs")
        myHeaders.append("Content-Type", "application/json");

        fetch((conUrl), {
            headers:myHeaders
        })
            .then((res) => {
                if(!res.ok){
                    throw Error("Error")
                }
                return res.json();
            })
            .then((data) => {
                
                setMovies(data.results)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleClick = (id) => {
    
        id && movies && movies.map((movie) => (movie.id)) && red === false ? setRed(true) : setRed(false)
    }
    
    useEffect(() => {
        const np = Host + 'movie/now_playing?language=en-US&page=1';
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODc1MDYxNjAwY2NhMjc5NTVkMmQ5OTJjZjI3OGFlNSIsInN1YiI6IjY1MDA3YWFjNTU0NWNhMDBmZWE2YWIxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LgiAwGSfKagR8aC52Dy-pdsKYrZDTzYXz7vF_WmBiqs")
        myHeaders.append("Content-Type", "application/json")
        setIsPending(true)

        fetch(np, {
            headers:myHeaders
        })
            .then((res) => {
                if(!res.ok){
                    throw Error('Error showing')
                }
                return res.json();
            })
            .then((data) => {
                
                setItems(data.results)
                setIsPending(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return ( 
        <div className="home" style={{padding:'0'}}>
            {!isPending && <div className="homeWrap">
                {items && items.map((item, index) => (<div className="heroBanner">
                    <div className="navbar" style={{position:'absolute', display:'flex', top:'10px', left:'80px', right:'80px', bottom:'0', width:'90%', justifyContent:'space-between', height:'100px'}}>
                        <Link to='/' style={{display:'flex', textDecoration:'none'}}>
                            <div className="logo"><img src={logo} alt="" /></div>
                            <p className="nam" style={{margin:'10px 0 0 10px', color:'white', fontSize:'x-large'}}>MOVIEBOX</p>
                        </Link>
                        <form action="">
                            <label style={{margin:'10px 0 0 790px', position:'absolute'}}><Link to='/'><img src={search} alt="" /></Link></label>
                            <input type="text"
                                value={input}
                                onChange={handleChange}
                                style={{outline:'0', border:'2px solid #ffffff', background:'none', padding:'10px', borderRadius:'10px', width:'800px', margin:'0', color:'white'}}
                                placeholder="What do you want to watch?"
                            />
                        </form>
                        <div className="right" style={{display:'flex', flexDirection:'row', padding:'0', margin:'0'}}>
                            <Link to='#' className="nam" style={{margin:'15px 10px 0 0', textDecoration:'none', color:'white'}}>Sign in</Link>
                            <img src={menu} alt="" style={{margin:'0', width:'45px', padding:'0', height:'45px', cursor:'pointer'}}/>
                        </div>
                    </div>
                    {first && index === 0 && <div className="bgImg" style={{display:'flex', flexDirection:'column', justifyContent:'center', width:'100%', minHeight:'650px', backgroundImage:`url("${getPosterURL(item.poster_path)}")`, margin:'0', backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'100%'}}>
                        <div className="screens" style={{position:'absolute', top:'300px', right:'30px'}}>
                            <div className="active">
                                {index=== 0 && <div style={{cursor:'pointer', display:'flex', color:'white'}}><img src={dash} alt="" /> <p style={{margin:'0'}}>1</p></div>}
                                {index !== 1 && <div style={{cursor:'pointer', display:'flex', color:'white', opacity:'0.5'}} onClick={e => {setSecond(true);setFirst(false); setThird(false); setFourth(false); setFifth(false)}}><p style={{margin:'0 0 0 20px'}}>2</p></div>}
                                {index !== 2 && <div style={{cursor:'pointer', display:'flex', color:'white', opacity:'0.5'}} onClick={e => {setThird(true);setFirst(false); setSecond(false); setFourth(false); setFifth(false)}}><p style={{margin:'0 0 0 20px'}}>3</p></div>}
                                {index !== 3 && <div style={{cursor:'pointer', display:'flex', color:'white', opacity:'0.5'}} onClick={e => {setFourth(true);setFirst(false); setSecond(false); setThird(false); setFifth(false)}}><p style={{margin:'0 0 0 20px'}}>4</p></div>}
                                {index !== 4 && <div style={{cursor:'pointer', display:'flex', color:'white', opacity:'0.5'}} onClick={e => {setFifth(true);setFirst(false); setSecond(false); setThird(false); setFourth(false)}}><p style={{margin:'0 0 0 20px'}}>5</p></div>}
                            </div>
                        </div>
                        <div className="dets" style={{margin:'0 80px'}}>
                            <h1 style={{color:'white', margin:'0 0 20px 0', padding:'0'}}>{item.original_title}</h1>
                            <div className="rates" style={{display:'flex', margin:'0 0 15px 0'}}>
                                <div className="imdbIcon" style={{margin:'0 20px 0 0', display:'flex'}}><img src={IMDB} alt="" style={{margin:'0 5px 0 0'}}/> <p style={{margin:'0', padding:'0', color:'white'}}>0/0</p></div>
                                <div className="imdbIcon" style={{margin:'0 20px 0 0', display:'flex'}}><img src={TMT} alt="" style={{margin:'0 5px 0 0'}}/> <p style={{margin:'0', padding:'0', color:'white'}}>0/0</p></div>
                            </div>
                            <div className="overview" style={{width:'30%', color:'white', margin:'0 0 15px 0'}}>{item.overview}</div>
                            <button className="trailer" style={{width:'150px', display:'flex', justifyContent:'space-between', textAlign:'center', backgroundColor:'#BE123C', borderRadius:'6px', padding:'10px', border:'0'}}><img src={Play} alt="" /><p style={{margin:'3px 0 0 0', padding:'0', color:'white'}}>WATCH TRAILER</p></button>
                        </div>
                    </div>}
                    {second && index === 1 && <div className="bgImg" style={{display:'flex', flexDirection:'column', justifyContent:'center', width:'100%', minHeight:'650px', backgroundImage:`url("${getPosterURL(item.poster_path)}")`, margin:'0', backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'100%'}}>
                        
                        <div className="screens" style={{position:'absolute', top:'300px', right:'30px'}}>
                            <div className="active">
                                {index !== 0 && <div style={{cursor:'pointer', display:'flex', color:'white', opacity:'0.5'}} onClick={e => {setSecond(false);setFirst(true); setThird(false); setFourth(false); setFifth(false)}}><p style={{margin:'0 0 0 20px'}}>1</p></div>}
                                {index === 1 && <div style={{cursor:'pointer', display:'flex', color:'white'}}><img src={dash} alt="" /> <p style={{margin:'0'}}>2</p></div>}
                                {index !== 2 && <div style={{cursor:'pointer', display:'flex', color:'white', opacity:'0.5'}} onClick={e => {setThird(true);setFirst(false); setSecond(false); setFourth(false); setFifth(false)}}><p style={{margin:'0 0 0 20px'}}>3</p></div>}
                                {index !== 3 && <div style={{cursor:'pointer', display:'flex', color:'white', opacity:'0.5'}} onClick={e => {setFourth(true);setFirst(false); setSecond(false); setThird(false); setFifth(false)}}><p style={{margin:'0 0 0 20px'}}>4</p></div>}
                                {index !== 4 && <div style={{cursor:'pointer', display:'flex', color:'white', opacity:'0.5'}} onClick={e => {setFifth(true);setFirst(false); setSecond(false); setThird(false); setFourth(false)}}><p style={{margin:'0 0 0 20px'}}>5</p></div>}
                            </div>
                        </div>                
                        <div className="dets" style={{margin:'0 80px'}}>
                            <h1 style={{color:'white', margin:'0 0 20px 0', padding:'0'}}>{item.original_title}</h1>
                            <div className="rates" style={{display:'flex', margin:'0 0 15px 0'}}>
                                <div className="imdbIcon" style={{margin:'0 20px 0 0', display:'flex'}}><img src={IMDB} alt="" style={{margin:'0 5px 0 0'}}/> <p style={{margin:'0', padding:'0', color:'white'}}>0/0</p></div>
                                <div className="imdbIcon" style={{margin:'0 20px 0 0', display:'flex'}}><img src={TMT} alt="" style={{margin:'0 5px 0 0'}}/> <p style={{margin:'0', padding:'0', color:'white'}}>0/0</p></div>
                            </div>
                            <div className="overview" style={{width:'30%', color:'white', margin:'0 0 15px 0'}}>{item.overview}</div>
                            <button className="trailer" style={{width:'150px', display:'flex', justifyContent:'space-between', textAlign:'center', backgroundColor:'#BE123C', borderRadius:'6px', padding:'10px', border:'0'}}><img src={Play} alt="" /><p style={{margin:'3px 0 0 0', padding:'0', color:'white'}}>WATCH TRAILER</p></button>
                        </div>
                    </div>}
                    {third && index === 2 && <div className="bgImg" style={{display:'flex', flexDirection:'column', justifyContent:'center', width:'100%', minHeight:'650px', backgroundImage:`url("${getPosterURL(item.poster_path)}")`, margin:'0', backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'100%'}}>
                        
                        <div className="screens" style={{position:'absolute', top:'300px', right:'30px'}}>
                            <div className="active">
                                {index !== 0 && <div style={{cursor:'pointer', display:'flex', color:'white', opacity:'0.5'}} onClick={e => {setSecond(false);setFirst(true); setThird(false); setFourth(false); setFifth(false)}}><p style={{margin:'0 0 0 20px'}}>1</p></div>}
                                {index !== 1 && <div style={{cursor:'pointer', display:'flex', color:'white', opacity:'0.5'}} onClick={e => {setThird(false);setFirst(false); setSecond(true); setFourth(false); setFifth(false)}}><p style={{margin:'0 0 0 20px'}}>2</p></div>}
                                {index === 2 && <div style={{cursor:'pointer', display:'flex', color:'white'}}><img src={dash} alt="" /> <p style={{margin:'0'}}>3</p></div>}
                                {index !== 3 && <div style={{cursor:'pointer', display:'flex', color:'white', opacity:'0.5'}} onClick={e => {setFourth(true);setFirst(false); setSecond(false); setThird(false); setFifth(false)}}><p style={{margin:'0 0 0 20px'}}>4</p></div>}
                                {index !== 4 && <div style={{cursor:'pointer', display:'flex', color:'white', opacity:'0.5'}} onClick={e => {setFifth(true);setFirst(false); setSecond(false); setThird(false); setFourth(false)}}><p style={{margin:'0 0 0 20px'}}>5</p></div>}
                            </div>
                        </div> 
                        <div className="dets" style={{margin:'0 80px'}}>
                            <h1 style={{color:'white', margin:'0 0 20px 0', padding:'0'}}>{item.original_title}</h1>
                            <div className="rates" style={{display:'flex', margin:'0 0 15px 0'}}>
                                <div className="imdbIcon" style={{margin:'0 20px 0 0', display:'flex'}}><img src={IMDB} alt="" style={{margin:'0 5px 0 0'}}/> <p style={{margin:'0', padding:'0', color:'white'}}>0/0</p></div>
                                <div className="imdbIcon" style={{margin:'0 20px 0 0', display:'flex'}}><img src={TMT} alt="" style={{margin:'0 5px 0 0'}}/> <p style={{margin:'0', padding:'0', color:'white'}}>0/0</p></div>
                            </div>
                            <div className="overview" style={{width:'30%', color:'white', margin:'0 0 15px 0'}}>{item.overview}</div>
                            <button className="trailer" style={{width:'150px', display:'flex', justifyContent:'space-between', textAlign:'center', backgroundColor:'#BE123C', borderRadius:'6px', padding:'10px', border:'0'}}><img src={Play} alt="" /><p style={{margin:'3px 0 0 0', padding:'0', color:'white'}}>WATCH TRAILER</p></button>
                        </div>
                    </div>}
                    {fourth && index === 3 && <div className="bgImg" style={{display:'flex', flexDirection:'column', justifyContent:'center', width:'100%', minHeight:'650px', backgroundImage:`url("${getPosterURL(item.poster_path)}")`, margin:'0', backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'100%'}}>
                        
                        <div className="screens" style={{position:'absolute', top:'300px', right:'30px'}}>
                            <div className="active">
                                {index !== 0 && <div style={{cursor:'pointer', display:'flex', color:'white', opacity:'0.5'}} onClick={e => {setSecond(false);setFirst(true); setThird(false); setFourth(false); setFifth(false)}}><p style={{margin:'0 0 0 20px'}}>1</p></div>}
                                {index !== 1 && <div style={{cursor:'pointer', display:'flex', color:'white', opacity:'0.5'}} onClick={e => {setThird(false);setFirst(false); setSecond(true); setFourth(false); setFifth(false)}}><p style={{margin:'0 0 0 20px'}}>2</p></div>}
                                {index !== 2 && <div style={{cursor:'pointer', display:'flex', color:'white', opacity:'0.5'}} onClick={e => {setFourth(false);setFirst(false); setSecond(false); setThird(true); setFifth(false)}}><p style={{margin:'0 0 0 20px'}}>3</p></div>}
                                {index === 3 && <div style={{cursor:'pointer', display:'flex', color:'white'}}><img src={dash} alt="" /> <p style={{margin:'0'}}>4</p></div>}
                                {index !== 4 && <div style={{cursor:'pointer', display:'flex', color:'white', opacity:'0.5'}} onClick={e => {setFifth(true);setFirst(false); setSecond(false); setThird(false); setFourth(false)}}><p style={{margin:'0 0 0 20px'}}>5</p></div>}
                            </div>
                        </div> 
                        <div className="dets" style={{margin:'0 80px'}}>
                            <h1 style={{color:'white', margin:'0 0 20px 0', padding:'0'}}>{item.original_title}</h1>
                            <div className="rates" style={{display:'flex', margin:'0 0 15px 0'}}>
                                <div className="imdbIcon" style={{margin:'0 20px 0 0', display:'flex'}}><img src={IMDB} alt="" style={{margin:'0 5px 0 0'}}/> <p style={{margin:'0', padding:'0', color:'white'}}>0/0</p></div>
                                <div className="imdbIcon" style={{margin:'0 20px 0 0', display:'flex'}}><img src={TMT} alt="" style={{margin:'0 5px 0 0'}}/> <p style={{margin:'0', padding:'0', color:'white'}}>0/0</p></div>
                            </div>
                            <div className="overview" style={{width:'30%', color:'white', margin:'0 0 15px 0'}}>{item.overview}</div>
                            <button className="trailer" style={{width:'150px', display:'flex', justifyContent:'space-between', textAlign:'center', backgroundColor:'#BE123C', borderRadius:'6px', padding:'10px', border:'0'}}><img src={Play} alt="" /><p style={{margin:'3px 0 0 0', padding:'0', color:'white'}}>WATCH TRAILER</p></button>
                        </div>
                    </div>}
                    {fifth && index === 4 && <div className="bgImg" style={{display:'flex', flexDirection:'column', justifyContent:'center', width:'100%', minHeight:'650px', backgroundImage:`url("${getPosterURL(item.poster_path)}")`, margin:'0', backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'100%'}}>
                        
                        <div className="screens" style={{position:'absolute', top:'300px', right:'30px'}}>
                            <div className="active">
                                {index !== 0 && <div style={{cursor:'pointer', display:'flex', color:'white', opacity:'0.5'}} onClick={e => {setSecond(false);setFirst(true); setThird(false); setFourth(false); setFifth(false)}}><p style={{margin:'0 0 0 20px'}}>1</p></div>}
                                {index !== 1 && <div style={{cursor:'pointer', display:'flex', color:'white', opacity:'0.5'}} onClick={e => {setThird(false);setFirst(false); setSecond(true); setFourth(false); setFifth(false)}}><p style={{margin:'0 0 0 20px'}}>2</p></div>}
                                {index !== 2 && <div style={{cursor:'pointer', display:'flex', color:'white', opacity:'0.5'}} onClick={e => {setFourth(false);setFirst(false); setSecond(false); setThird(true); setFifth(false)}}><p style={{margin:'0 0 0 20px'}}>3</p></div>}
                                {index !== 3 && <div style={{cursor:'pointer', display:'flex', color:'white', opacity:'0.5'}} onClick={e => {setFifth(false);setFirst(false); setSecond(false); setThird(false); setFourth(true)}}><p style={{margin:'0 0 0 20px'}}>4</p></div>}
                                {index === 4 && <div style={{cursor:'pointer', display:'flex', color:'white'}}><img src={dash} alt="" /> <p style={{margin:'0'}}>5</p></div>}
                            </div>
                        </div> 
                        <div className="dets" style={{margin:'0 80px'}}>
                            <h1 style={{color:'white', margin:'0 0 20px 0', padding:'0'}}>{item.original_title}</h1>
                            <div className="rates" style={{display:'flex', margin:'0 0 15px 0'}}>
                                <div className="imdbIcon" style={{margin:'0 20px 0 0', display:'flex'}}><img src={IMDB} alt="" style={{margin:'0 5px 0 0'}}/> <p style={{margin:'0', padding:'0', color:'white'}}>0/0</p></div>
                                <div className="imdbIcon" style={{margin:'0 20px 0 0', display:'flex'}}><img src={TMT} alt="" style={{margin:'0 5px 0 0'}}/> <p style={{margin:'0', padding:'0', color:'white'}}>0/0</p></div>
                            </div>
                            <div className="overview" style={{width:'30%', color:'white', margin:'0 0 15px 0'}}>{item.overview}</div>
                            <button className="trailer" style={{width:'150px', display:'flex', justifyContent:'space-between', textAlign:'center', backgroundColor:'#BE123C', borderRadius:'6px', padding:'10px', border:'0'}}><img src={Play} alt="" /><p style={{margin:'3px 0 0 0', padding:'0', color:'white'}}>WATCH TRAILER</p></button>
                        </div>
                    </div>}
                </div>))}
                <div className="body" style={{display:'flex', flexWrap:'wrap', margin:'50px 80px', alignItems:'center'}}>
                    {movies && movies.slice(0, 10).map((movie) => (<div className="movies" style={{margin:'50px 0 50px 80px'}} key={movie.id}>
                        <img src={fav} alt="" onClick={e => {handleClick(movie.id)}} style={{position:'absolute', margin:'10px 0 0 180px', cursor:'pointer'}}/>
                        {red && <img src={redFav} alt="" onClick={e => {handleClick(movie.id)}}  style={{position:'absolute', margin:'19px 0 0 187px', cursor:'pointer'}}/>}
                        <Link to={`/movies/${movie.id}`} className="wrap" style={{width:'220px', textDecoration:'none'}}>
                            <img data-testid="movie-poster" src={getImgURL(movie.poster_path)} alt="" />
                            <div className="card" data-testid="movie-card" >
                                <div className="date" data-testid="movie-release-date" style={{color:'#9CA3AF'}}>{movie.release_date}</div>
                                <h3 className="nam" data-testid="movie-title" style={{color:'black', margin:'10px 0'}}>{movie.original_title}</h3>
                            </div>
                            <div className="ratings" style={{display:'flex', width:'220px', justifyContent:'space-between', color:'black'}}><div className="im" style={{display:'flex'}}><img src={IMDB} alt="" /> <p style={{margin:'0 0 0 5px'}}>0/0</p></div><div className="im" style={{display:'flex'}}><img src={TMT} alt="" /> <p style={{margin:'0 0 0 5px'}}>0/0</p></div></div>
                            <div className="genre" style={{color:'#9CA3AF', fontSize:'small', margin:'5px 0'}}>Genre: </div>
                        </Link>
                    </div>))}
                </div>
            </div>}
            {isPending && <div className="load" style={{display:'flex', justifyContent:'center', alignItems:'center'}}> </div>}
        </div>
     );
}
 
export default HOME;