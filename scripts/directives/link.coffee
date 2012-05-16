###global define###

define ['directives/directives', 'text!partials/link.html'], (directives, template) ->
	'use strict'

	directives.directive 'ngLink', [->
		replace: true
		restrict: 'E'
		scope:
			url: 'bind'
		template: template
		transclude: true
	]