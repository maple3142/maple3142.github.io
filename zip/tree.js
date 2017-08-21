function generateTree(paths) {
	function getFilename(path) {
		return path.split("/").filter(function (value) {
			return value && value.length;
		}).reverse()[0];
	}
	function findSubPaths(path) {
		var rePath = path.replace("/", "\\/");
		var re = new RegExp("^" + rePath + "[^\\/]*\\/?$");
		return paths.filter(function (i) {
			return i !== path && re.test(i);
		});
	}
	function buildTree(path) {
		path = path || "";
		var nodeList = {};
		findSubPaths(path).forEach(function (subPath) {
			var nodeName = getFilename(subPath);
			if (/\/$/.test(subPath)) {
				nodeList[nodeName] = buildTree(subPath);
			} else {
				nodeList[nodeName] = null;
			}
		});
		return nodeList;
	}
	var tree = buildTree('');
	if (tree.length == 1 && (typeof tree[0] === 'object')) {
		tree = tree[0];
	}
	return tree
}
