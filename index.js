"use strict";
const got = require("got");

module.exports = async function(name) {
	const res = await got("https://api.github.com/orgs/" + name, {
		json: true,
		headers: {
			accept: "application/vnd.github.v3+json",
			"user-agent": "https://github.com/joachimdalen/github-org-exists"
		}
	})
		.then(() => {
			return true;
		})
		.catch(() => {
			return false;
		});
  return res;
};
