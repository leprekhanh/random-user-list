export function formatUserData(userArray) {
	return userArray.map(user => {
		return {
			imageUrl: user.picture.large,
			fullName: `${user.name.first} ${user.name.last}`,
			email: user.email
		};
	});
}

export function createUserInfoNode(user) {
	const listItemNode = document.createElement("li");
	listItemNode.className = "user";

	const listItemChildNodes = [
		{
			nodeType: "img",
			className: "user-image",
			src: user.imageUrl,
			alt: `Picture of ${user.fullName}`
		},
		{
			nodeType: "div",
			className: "user-name",
			innerText: user.fullName
		},
		{
			nodeType: "div",
			innerText: user.email
		}
	];

	listItemChildNodes.forEach(function(childNode) {
		const { nodeType, ...nodeProperties } = childNode;
		const node = document.createElement(nodeType);
		Object.keys(nodeProperties).forEach(
			nodeProperty => (node[nodeProperty] = childNode[nodeProperty])
		);
		listItemNode.append(node);
	});

	return listItemNode;
}
