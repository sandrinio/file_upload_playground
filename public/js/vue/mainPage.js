import axios from 'axios';

let app = new Vue ({
	 el: '#app',
	 data: {
			message: 'hello'
	 }
});
axios.get(`/testing-route`)
		.then(response => {
			 // JSON responses are automatically parsed.
			 console.log(response)
		})
		.catch(e => {
			 this.errors.push(e)
		});