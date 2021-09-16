import HeaderContainer from "../../Components/Posts/Header/Header"
import FindFriendsContainer from "./FindFriendsStyle";
import { useState,useEffect } from "react";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";

const FindFriends = () => {
    const[user,setUser] = useState('mijail.febres@gmail.com')
    const[pass,setPass] = useState('algunpassword')
    const[token,setToken] = useState(null)
    const[people,setPeople] = useState([])

    useEffect(() => {
        const token = localStorage.getItem('auth-token'); // get the token form localStorage
        if (token) {
            // dispatch(updateToken(token)) // updating token with hooks
            setToken(token);
        }
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
            if (item.avatar) {
                return item;
            }
        })

        setPeople([...newData])
    }

    const handleGetPeople = () => {
        login();
        getPeople();
    }

    return (
        <div 
            id='main' 
            style = {{width : '100vw',
                      backgroundColor : 'white',
                      display : 'flex',
                      flexDirection: 'column',
                      position : 'relative'}
            }
            >
            <HeaderContainer 
                handleGetPeople={handleGetPeople}
                />
            <FindFriendsContainer>
                {Object.keys(people).length > 0 ?
                    people.map((user,ind)=> {
                        return (
                            <ProfileCard key={ind} user={user}/>
                        )

                    })
                :
                    null
                }
            </FindFriendsContainer>
        </div>
    )
}

export default FindFriends;