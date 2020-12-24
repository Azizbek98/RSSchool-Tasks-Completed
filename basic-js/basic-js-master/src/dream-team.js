module.exports = function createDreamTeam(members) {
  	if (Array.isArray(members) == false) 
  		return false;

  	let result = members.filter(a => typeof a == 'string').map(n => n.replace(/^\s+/,'')[0].toUpperCase()).sort().join('');
  	return result;
};