/**
 * Binds navigation children toggling
 */
function bindNavToggle() {

	function bindItem(el) {

		el.addEventListener("click", function() {

			el.parentElement.classList.toggle("nav-tree__item--collapsed");

		});

	}

	var links = document.querySelectorAll(".nav-tree__item__label--togglable");

	for (var i = 0; i < links.length; i++)
		bindItem( links.item(i) );

}

/**
 * Binds collapsibles
 */
function bindCollapsibles() {

	function bindItem(el) {

		el.addEventListener("click", function() {

			const targetId = el.getAttribute("data-target");
			const targetEl = document.getElementById(targetId);

			if (targetEl)
				targetEl.classList.toggle("collapsible--collapsed");

		});

	}

	var links = document.querySelectorAll(".collapsible__toggler");

	for (var i = 0; i < links.length; i++)
		bindItem( links.item(i) );

}

/**
 * Binds tab components
 */
function bindTabs() {

	function bindTabsEl(el) {

		var links = el.querySelectorAll("a");

		if (links.length === 0) return;

		function activateTab(linkEl) {

			for (var i = 0; i < links.length; i++) {

				var itemEl = links.item(i);
				var targetEl = document.getElementById(itemEl.href.split("#", 2)[1]);

				if (!targetEl) {
					console.warn("Tab container element '%s' not found.", itemEl.href.split("#", 2)[1]);
					continue;
				}

				if (links.item(i) === linkEl) {
					itemEl.parentElement.classList.add("tabs__item--active");
					targetEl.classList.add("tabs__content--active");
				} else {
					itemEl.parentElement.classList.remove("tabs__item--active");
					targetEl.classList.remove("tabs__content--active");
				}

			}

		}

		function bindLink(linkEl) {

			linkEl.addEventListener("click", function(ev) {

				ev.preventDefault();
				activateTab(linkEl);
				return false;

			});

		};

		for (var i = 0; i < links.length; i++)
			bindLink(links.item(i));

		activateTab(links.item(0));

	}

	var tabEls = document.querySelectorAll(".tabs");

	for (var i = 0; i < tabEls.length; i++)
		bindTabsEl( tabEls.item(i) );

}

function bindFilters() {

	function updateFilter(el) {

		if (el.checked) {
			document.body.classList.remove("annot-hide-" + el.getAttribute("data-annotation"));
			localStorage["raml2html_filters_" + el.getAttribute("data-annotation")] = "1";
		} else {
			document.body.classList.add("annot-hide-" + el.getAttribute("data-annotation"));
			localStorage["raml2html_filters_" + el.getAttribute("data-annotation")] = "0";
		}

	}

	function bindFilterOption(el) {

		el.addEventListener("change", () => updateFilter(el));

		if (localStorage["raml2html_filters_" + el.getAttribute("data-annotation")] == "0") {
			el.checked = false;
			updateFilter(el);
		}

	}

	var filterOptEls = document.querySelectorAll(".nav-tree__filter-checkbox");

	for (var i = 0; i < filterOptEls.length; i++)
		bindFilterOption( filterOptEls.item(i) );

}

window.addEventListener("load", function() {

	bindNavToggle();
	bindCollapsibles();
	bindTabs();
	bindFilters();

});