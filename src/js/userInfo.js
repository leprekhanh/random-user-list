export function formatUserData(userArray) {
	return userArray.map(user => {
		return {
			imageUrl: user.picture.large,
			fullName: `${user.name.first} ${user.name.last}`,
			email: user.email
		};
	});
}

function createImageNode(user) {
	const imageNode = document.createElement("img");
	imageNode.src = user.imageUrl;
	imageNode.alt = `Picture of ${user.fullName}`;
	imageNode.className = "user-image";

	return imageNode;
}

export function createUserInfoNode(user) {
	const listItemNode = document.createElement("li");
	listItemNode.className = "user";

	const userImageNode = createImageNode(user);
	listItemNode.appendChild(userImageNode);

	const nameNode = document.createElement("div");
	nameNode.className = "user-name";
	nameNode.innerText = user.fullName;
	listItemNode.append(nameNode);

	const emailNode = document.createElement("div");
	emailNode.innerText = user.email;
	listItemNode.append(emailNode);

	return listItemNode;
}
