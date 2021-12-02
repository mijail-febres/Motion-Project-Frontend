import { useSelector } from 'react-router';

export const LoginWrapper = (WrappedComponent) => {
    return props => {
        const token = localStorage.getItem('token');

        if(token){
            return <WrappedComponent/>
        }else{
            props.history.push("/login");
            return null;
        }
    }
}
