/**
* Auteur : 	DWAPS Formation - Michael Cornillon
* Mail : 	contact@dwaps.fr
* Tel :		0651279211
* Site : 	http://dwaps.fr
* Date : 	02/10/2016
*
* Module perso : 	dwapsToast
* Description : 	Affichage bref d'un message informatif ou d'un logo de chargement
* 
* Utilisation : 
* 
* 		- Timer du toast (par défaut: 1200 ms) : établit la durée du Toast
* 		- Affichage : dwapsToast.show("<b>Message informatif</b>")
* 		
* 		- Affichage à l'infini : 	dwapsToast.setTimer(0)
* 		- Affichage temporaire : 	dwapsToast.setTimer(1200)
* 		- Affichage sans message : 	dwapsToast.show("")
*       - Réinitialisation du timer : dwapsToast.resetTimer()
**/


angular
	.module('dwapsToast', [ 'ionic' ])

    .constant( 'TOAST', {
        timer: 1200,
        show: 
            function(mss, timeOff, ionicLoading, timeout) {

                if(mss != "") ionicLoading.show({ template: mss });
                else ionicLoading.show();

                if(timeOff != 0)
                {
                    timeout(function() {
                        ionicLoading.hide();
                    }, timeOff);
                }
            }
    })

    .service('dwapsToast', ["$ionicLoading", "$timeout", "TOAST", dwapsToast])
;



function dwapsToast($ionicLoading, $timeout, TOAST)
{
	function show(mss)
	{
		TOAST.show( mss, TOAST.timer, $ionicLoading, $timeout );
	}

	function setTimer(timer)
	{
		TOAST.timer = timer;
	}

    function resetTimer()
    {
        TOAST.timer = 1200;
    }

    return {
		show: 		show,
		setTimer: 	setTimer,
        resetTimer: resetTimer
    };
}