import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
// import { userProfileEdit } from '../YourProfileEditFeatures/userSlice';
import ThingsList from './UserProfileEditCompos/Thingslist';
import JenPic from '../../../src/Assets/images/users/jennifer.png';


const OwnEditProfileContainer = styled.div`



    label {

    }

`

    

// const UserFormEdit = ({type, placeholder, label, errorMessage}) => 

const OwnerProfileEditForm = () => {

    const [firstname, setFirstname] = useState("Jennifer");
    const [email, setEmail] = useState("jennifersmith@gmail.com");
    const [location, setLocation] = useState("Zürich, Switzerland");
    const [about, setAbout] = useState("Lorem ipsum dolor sit amet,vim ut quas volumus probatus, has tantas laudem iracundia et, ad per utamur ceteros apeirian");
    const [lastname, setLastname] = useState("Smith");
    const [username, setUsername] = useState("jennifer.smith");
    const [phone, setPhone] = useState("123-456-7890");
    const [password, setPassword] = useState("12345678");

    // const dispatch = useDispatch();

    // // to prevent the website from reloading
    // const handleSubmit = (e) => {
    //     e.prenventDefault();

    //     dispatch(userProfileEdit({
    //         firstname: firstname,
    //         email: email,
    //         location: location,
    //         about: about,
    //         lastname: lastname,
    //         username: username,
    //         phone: phone,
    //         password: password,
    //     }));

    return (
        <>

        <div className="user-edit-leftblock">
            <div className="update-img">
                <img src={JenPic} alt="useravatar" />
                <button label="UPDATE IMAGE">UPDATE IMAGE</button>

            </div>

        <div>
            {/* Icons are missing! */}
            <button label="Upload">Upload</button>
            <button label="Remove">Remove</button>
        </div>

        <div>
            <button label="Delete Account">DELETE ACCOUNT</button>
            <button label="Save">SAVE</button>
        </div>

        </div>

        <form className="user-edit-rightblock">
            <div className="edit-leftblock">
                <input 
                    label="First name"
                    type="text" 
                    placeholder="" 
                    value={firstname} 
                    onChange={(e) => setFirstname(e.target.value)} 
                />
                <input 
                    label="Email"
                    type="email" 
                    placeholder="" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
{/* What about the arrow for the location choice? */}
                <input 
                    label="Location"
                    type="search" 
                    placeholder="" 
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)}
                />

                <input 
                    label="About"
                    type="text" 
                    placeholder="" 
                    value={about} 
                    onChange={(e) => setAbout(e.target.value)}
                />

                </div>

            <div className="edit-rightblock">
                <input 
                    label="Last name"
                    type="text" 
                    placeholder="" 
                    value={lastname} 
                    onChange={(e) => setLastname(e.target.value)} 
                />
                <input 
                    label="Username"
                    type="text"
                    placeholder="" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                    label="Phone"
                    type="tel" 
                    placeholder="" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input 
                    label="Password"
                    type="password" 
                    placeholder="" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            
        </form>

         <div>
            Things I like (from OwnerProfileEdit.jsx)
            <ThingsList />
        </div>

        </>
    )
}

export default OwnerProfileEditForm
