define([
	"dojo/_base/declare",
	"dojo/_base/lang"
], function(declare, lang) {
	var getValueExtension = declare(null, {
		_getValue: function() {
			console.log("working?????")
			var arrayOfValues = [];
			var tempRowIdToObject = dojo.clone(this._rowIdToObject)
			for (eachRow in tempRowIdToObject) {
				var rowId = eachRow.split('-row-')[1]
				var _obj = '';
				var mixedObject = lang.mixin(tempRowIdToObject[eachRow], _obj)
				arrayOfValues.push(mixedObject);
				console.log("temprowtobject", tempRowIdToObject)

			}
			return arrayOfValues;
		}
	});
	return getValueExtension

});