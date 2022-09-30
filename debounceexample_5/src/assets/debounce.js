export const debounce = (callback, delay) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => callback(...args), delay);
    };
};


// function debounce(fn, wait) {
// 	var timeout;
// 	return function() {
// 		var context = this;
//         var args = arguments;
		
//         clearTimeout(timeout);
        
// 		timeout = setTimeout(function() {
// 		    fn.apply(context, args);
// 		}, wait);
// 	};
// };
