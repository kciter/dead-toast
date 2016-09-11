function DeadToast() {
}

DeadToast.makeText = function(message, duration) {
	var duration = duration | 2000;
	const deadToast = new DeadToast();
	deadToast.message = message;
	deadToast.duration = duration;
	return deadToast;
}

DeadToast.prototype.show = function() {
	var bodyDOM = document.getElementsByTagName('body')[0];
	var deadToastDOM = document.createElement('div');
	deadToastDOM.className = 'dead-toast';

	var deadToastContentDOM = document.createElement('div');
	deadToastContentDOM.className = 'dead-toast-content';
	deadToastContentDOM.innerHTML = this.message;
	deadToastDOM.appendChild(deadToastContentDOM);

	setTimeout(function() {
		deadToastDOM.className = 'dead-toast';
		['transitionend', 'webkitTransitionEnd', 'mozTransitionEnd', 'MSTransitionEnd'].forEach(function(transition) {
			deadToastDOM.addEventListener(transition, function() {
				bodyDOM.removeChild(deadToastDOM);
			}, false);
		})
	}, this.duration);

	bodyDOM.appendChild(deadToastDOM);
	setTimeout(function() {
		deadToastDOM.className += ' show';
	}, 10);
}
