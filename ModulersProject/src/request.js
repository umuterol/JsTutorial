export class Request {

    constructor(url) {
        this.url = url;

    }

    async get() {

        const response = await fetch(this.url);
        const responseData = await response.json();

        return responseData;
    }


    async post(employee) {

        const response = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(employee),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        });

        const responseData = await response.json();

        return responseData;

    }


    async put(id, employee) {

        const response = await fetch(this.url + "/" + id, {
            method: 'PUT',
            body: JSON.stringify(employee),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        });

        const responseData = await response.json();

        return responseData;

    }


    async delete(id) {

        const response = await fetch(this.url + "/" + id,{method:'DELETE'});
        const responseData = await response.json();

        return responseData;
    }

  

}