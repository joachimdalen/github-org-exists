"use strict";

var expect = require("chai").expect;
var githubOrgExists = require("./index");

describe("github-org-exists", function() {
	it("should not exists", async function() {
        let res = await githubOrgExists("djdsakbdøadbøk");
        expect(res).to.be.false;
    });
    it("should exists", async function() {
        let res = await githubOrgExists("dalenapps");
        expect(res).to.be.true;
	});
});
