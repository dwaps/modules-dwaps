
# DWAPS Modules

Simple small practical modules for the development or the production in an Ionic project.

## Installation

(In an Ionic project)
bower install dwaps

## Modules description

**dwapsToast**
_Brief display of an informative message or a loading logo (use ionicLoading)_

**dwapsLog**
_Activation/desactivation and change type of log in console (use angularjs and console.log)_

---

## Usage

1/ Include modules into your index.html :

    <script src="modules/logs.js"></script>
    <script src="modules/toast.js"></script>

2/ Add the dependencies into your angular module :

	angular.module('app', ['ionic', 'dwapsToast', 'dwapsLog'])

3/ Use it into your controller (or service, filter...) :

	angular.controller('YourCtrl', function (dwapsLog, dwapsToast)
	{
		// TOASTS

			/* default : 1200ms */
			dwapsToast.show( "Your message" );
			dwapsToast.show( "<h1 class='dwaps-toast')Your message</h1>" );

			/* Change duration */
			dwapsToast.setTimer( 0 ); // Inifinite
			dwapsToast.setTimer( 550 ); // 550ms
			dwapsToast.resetTimer(); // By default

		// LOGS

			dwapsLog.active( true | false );
			dwapsLog.setType( | 'info' | 'warning' ) // By default : log

			dwapsLog.show( yourObject );
			dwapsLog.show( "Your message" );
			dwapsLog.show( "<h1 class='dwaps-toast'>Your message</h1>" );
	});

---

[® DWAPS Formation] (http://dwaps.fr "DWAPS")