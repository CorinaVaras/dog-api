class Breeds{
    api(){
        return fetch('https://dog.ceo/api/breeds/list/all')
                .then((response) => {
                    return response.json()

                })
    }
}

export default Breeds;