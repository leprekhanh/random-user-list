import { fetchUsers } from "./api.js";

function clearExistingList() {
	const userListNode = document.getElementById("user-list");
	if (userListNode.innerHTML) {
		userListNode.innerHTML = "";
	}
}

const buttonContainerNode = document.getElementById("button-container");
buttonContainerNode.addEventListener("click", function(event) {
	const eventTarget = event.target;

	if (eventTarget.nodeName.toLowerCase() === "button") {
		const gender = eventTarget.id;
		if (gender) {
			clearExistingList();
			fetchUsers(gender);
		}
	}
});
