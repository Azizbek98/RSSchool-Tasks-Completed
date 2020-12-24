const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	if (typeof sampleActivity !== 'string') 
		return false;

  	let Activity = parseFloat(sampleActivity);
  	if (isNaN(Activity) || Activity <= 0 || Activity > 15) 
  		return false;

  	let k = Math.LN2.toFixed(3) / HALF_LIFE_PERIOD;
  	let result = Math.ceil(Math.log(MODERN_ACTIVITY / Activity) / k);
  	
  	return result;
};
