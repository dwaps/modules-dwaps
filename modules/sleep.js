/**
* Auteur :  DWAPS Formation - Michael Cornillon
* Mail :    contact@dwaps.fr
* Tel :     0651279211
* Site :    http://dwaps.fr
* Date :    11/03/2017
*
* Module perso :    dwapsSleep
* Description :     Permet la "suspension" du programme pendant le temps (en ms) désiré
* 
* Utilisation : 
* 
*       - dwapsSleep( 1000 ) --> "Suspension" du programme pendant 1s
**/


angular
    .module('dwapsSleep', [])
    .constant( 'NOW', new Date().getTime())
    .factory('dwapsSleep', dwapsSleep)
;

return function dwapsSleep(NOW)
{
    function ( millis )
    {        
        var timer = NOW + millis;
        while( timer > new Date().getTime() );
        NOW = new Date().getTime();
        sleep( millis );    
    }
}