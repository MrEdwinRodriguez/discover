const setAuthToken = token => {
    if(token) {
        return defaultOptions = {
            headers: {
                "Authorization": `Bearer ${token}`
          }
        }
    }
}

export default setAuthToken;