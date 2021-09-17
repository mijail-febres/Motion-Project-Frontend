import BackgroundContainer from "./BackgroundStyle";
import { useState,useEffect } from "react";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import MasterHeader from "../../Components/Posts/Header/Header";

const Background = () => {
    const[user,setUser] = useState('mijail.febres@gmail.com')
    const[pass,setPass] = useState('algunpassword')
    const[token,setToken] = useState(null)
    const[people,setPeople] = useState([])
    const[motion,setMotion] = useState(false);
    const[posts,setPosts] = useState(false);
    const[findFriends,setBackground] = useState(false);


    useEffect(() => {
        const token = localStorage.getItem('auth-token'); // get the token form localStorage
        if (token) {
            // dispatch(updateToken(token)) // updating token with hooks
            setToken(token);
        }
        setMotion(true);
    }, []);

    const login = async () => {
        if (!token) {
            const url = 'https://motion.propulsion-home.ch/backend/api/auth/token/';

            const method = 'POST'; // method

            const headers = new Headers({  // headers
                'Content-type': 'application/json'
            });

            const body = {  // body
                'email': user,
                'password': pass,
            }

            const config = { // configuration
                method : method,
                headers: headers,
                body : JSON.stringify(body)
            }

            const response = await fetch(url, config);  //fething
            const data     = await response.json();  // getting the user
            localStorage.setItem('auth-token', data.access); // store token
            setToken(data.acces)
        }

    }

    const getPeople = async () => {
        const url = 'https://motion.propulsion-home.ch/backend/api/users/?limit=1000';

        const method = 'GET'; // method

        const headers = new Headers({  // headers
            'Authorization': `Bearer ${token}`,
        });

        const config = { // configuration
            method : method,
            headers: headers,
        }

        const response = await fetch(url, config);  //fething
        const data     = await response.json();  // getting the user


        const newData = data.results.filter(item => {
            if (motion) {
                if (item.banner) {
                    return item;
                }
            }
        })

        setPeople([...newData])
    }

    const handleGetPeople = () => {
        // login();
        getPeople();
    }

    const handleSetMotion = () => {
        setMotion(true)
        setPosts(false)
        setBackground(false)
    }

    const handleSetPosts =() => {
        setMotion(false)
        setPosts(true)
        setBackground(false)
    }

    const handleSetFindFriends =() => {
        setMotion(false)
        setPosts(false)
        setBackground(true)
    }

    return (
        <div 
            id='main' 
            style = {{width : '100vw',
                      minHeight : '100vh',
                      backgroundColor : 'white',
                      display : 'flex',
                      flexDirection: 'column',
                      position : 'relative'}
            }
            >
            
            <MasterHeader 
                handleSetPosts={handleSetPosts} 
                handleGetPeople={handleGetPeople} 
                handleSetMotion={handleSetMotion} 
                handleSetFindFriends={handleSetFindFriends}
            />
            
            {motion ?
                
                <div id = 'background' 
                    style = {{width : '100%', height : '80%'}}
                >
                    <img id = 'background-image' 
                        src="https://motion.propulsion-home.ch/media-files/d0f68ea9bed6a4c8a17de6b344f1a9aa_72rset7.png" alt='background'
                        style = {{width : '100%', height : '20%'}}
                    />
                    <div id = 'rest'>
                    </div>
                </div>
            :
            null
            }
            {/* {posts ?     Eventually, posts may be given here !!!!
                <div className="div"></div>
            :
            null} */}

            {findFriends ?
                <BackgroundContainer>
                    {Object.keys(people).length > 0 ?
                        people.map((user,ind)=> {
                            return (
                                <ProfileCard key={ind} user={user}/>
                            )

                        })
                    :
                        null
                    }
                </BackgroundContainer>
            :
            null}
        </div>
    )
}

export default Background;