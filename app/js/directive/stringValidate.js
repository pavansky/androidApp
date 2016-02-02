/**
 * Directive to validate strings
 */

app.directive('stringValidate', function() {
	var STRING_REGEXP = /^[a-zA-Z0-9]+$/i;

	return {
		require : 'ngModel',
		restrict : '',
		link : function(scope, elm, attrs, ctrl) {

			ctrl.$validators.string = function(modelValue, viewValue) {
				if (ctrl.$isEmpty(modelValue)) {
					// consider empty models to be valid
					return true;
				}

				if (STRING_REGEXP.test(viewValue)) {
					// it is valid
					return true;
				}

				// it is invalid
				return false;
			};
		}
	};
});