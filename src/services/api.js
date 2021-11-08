import axios from 'axios';

function LoginUser() {
    const handleLogin = () => {
        setLoading(true);
        axios.post('http://localhost:3000/api/apiRest', { username: username.value, password: password.value }).then(response => {
          setLoading(false);
          setUserSession(response.data.token, response.data.user);
          props.history.push('/dashboard');
        }).catch(error => {
          setLoading(false);
          if (error.response.status === 401) setError(error.response.data.message);
          else setError("Something went wrong. Please try again later.");
        });
    }
}

export default LoginUser;