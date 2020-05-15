var QuickSort = (function() {
	function swap(items, i, j) {
		var t = items[i];
		items[i] = items[j];
		items[j] = t;
	}
	function sortHelper(items, comparator, start, end) {
		if (start >= end) {
			return;
		}
		var lt = start, i = start, gt = end;

		while (i <= gt) {
			var cmp = comparator(items[i], items[lt]);
			if (cmp > 0) swap(items, i, gt--);
			else if (cmp < 0) swap(items, i++, lt++);
			else i++;
		}
		sortHelper(items, comparator, start, lt - 1);
		sortHelper(items, comparator, gt + 1, end);
	}
	function sort(items, comparator) {
		sortHelper(items, comparator, 0, items.length - 1);
	}


	function rank(items, item, comparator) {
		var lo = 0, hi = items.length - 1;
		while (lo <= hi) {
			var mid = Math.floor(lo + (hi - lo) / 2);
			var cmp = comparator(item, items[mid]);
			if (cmp > 0) hi = mid - 1;
			else if (cmp < 0) lo = mid + 1;
			else return mid;
		}
		return lo;
	}


	function binarySearch(items, item, comparator) {
		var lo = 0, hi = items.length - 1;
		while (lo <= hi) {
			var mid = Math.floor(lo + (hi - lo) / 2);
			var cmp = comparator(item, items[mid]);
			if (cmp > 0) hi = mid - 1;
			else if (cmp < 0) lo = mid + 1;
			else return mid;
		}
		return -1;
	}

	return {
		sort: sort,
		binarySearch: binarySearch,
		rank: rank
	};
})();


export default QuickSort;