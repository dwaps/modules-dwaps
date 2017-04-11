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
*       - dwapsSleep( 1000, true ) --> MAJ horloge toutes les 1s
**/


angular
    .module('dwapsSleep', [])
    .constant( 'NOW', new Date().getTime())
    .service('dwapsSleep', ['NOW', dwapsSleep])
;

function dwapsSleep(NOW)
{
    function go( millis, horloge )
    {
        var timer = NOW + millis;
        while(timer > NOW)
            NOW = new Date().getTime();
        
        if(!horloge) return;
        else
        {    
            setTimeout(
                function()
                {
                    go( millis, horloge );
                },
                millis
            );
        }

        return;
    }

    return {
        go: go
    };
}