import { formatUserData, createUserInfoNode } from "./userInfo.js";

const MAX_RESULTS = 9;

function showError() {
	window.alert("The generator is experiencing issues, please try again later");
}

export function fetchUsers(gender) {
	axios
		.get(
			`https://randomuser.me/api/?results=${MAX_RESULTS}&gender=${gender}&inc=name,email,picture`
		)
		.then(function(response) {
			const data = response.data;
			if (data.results) {
				const users = formatUserData(data.results);
				const userListNode = document.getElementById("user-list");
				users.forEach(user =>
					userListNode.appendChild(createUserInfoNode(user))
				);
			} else if (data.error) {
				showError();
			}
		})
		.catch(function(error) {
			console.log(error);
			showError();
		});
}
