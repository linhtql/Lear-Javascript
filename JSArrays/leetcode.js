var compose = function(functions) {

	return function(x) {
        const arrLen = functions.length;
            if (arrLen === 0) {
                return x;
            } else {
                let result = functions[arrLen - 1](x);
                for (let i = arrLen - 2; i >= 0; i--) {
                    result = functions[i](result)
             }
             return result;
            }
        }
    };
const fn =  compose([x => x + 1, x => 2 * x]);

console.log(fn (4));