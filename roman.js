(function(){
	var RomanNumeral = function (){
		var in_num = this;
		var numeralMap = [[1000, "M"],[500, "D"],[100, "C"], [50,"L"], [10, "X"], [5, "V"], [1, "I"]];
		var roman = "";
		working_num = Math.round(in_num)
		
		while (working_num > 0) {
			for (var i = 0; i < numeralMap.length; i++){

				//reduce 4 repeating numerals in a row 
				//from " IIII " to " IV "

				var compare = numeralMap[i][0];
				var numeral = numeralMap[i][1];
				var next = i + 1
				if (next < numeralMap.length && 
					((working_num >= (compare - numeralMap[next][0]) &&
					 working_num < compare) &&	
						(compare - numeralMap[next][0] != numeralMap[next][0]))) {

					compare = compare - numeralMap[next][0]
					numeral = numeralMap[next][1] + numeral;
				}

				if (working_num >= compare){
					roman += numeral; 
					working_num -= compare;
					break;
				}
			}			
		}
		
		console.log(in_num + " = " + roman);
		return true;
	};

	function test() {
		var testNums = [1,4,5,9,10,40,50,90,100,400,500,1000,1904,1994,12.3,10.9];
		for (var i = 0; i < testNums.length; i++){
			var num = testNums[i];
			num.toRoman();
		}
	}


	Number.prototype.toRoman = RomanNumeral;
	test();

})();