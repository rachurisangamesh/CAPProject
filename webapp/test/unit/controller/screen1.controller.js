/*global QUnit*/

sap.ui.define([
	"project1/controller/screen1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("screen1 Controller");

	QUnit.test("I should test the screen1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
