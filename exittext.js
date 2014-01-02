var els = document.querySelectorAll('body *');
for (i in els) {
	if( els[i] instanceof HTMLElement)
	{
		els[i].style.transition = 'color 0.6s linear';
		els[i].style.color = 'rgba(0,0,0,0)';
	}
};

return false;