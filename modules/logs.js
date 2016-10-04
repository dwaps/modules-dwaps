/**
* Auteur : 	DWAPS Formation - Michael Cornillon
* Mail : 	contact@dwaps.fr
* Tel :		0651279211
* Site : 	http://dwaps.fr
* Date : 	02/10/2016
*
* Module perso : 	dwapsLog
* Description : 	Simple log en console avec possibilité d'activation ou non
* 
* Utilisation : 
* 
* 		- Activation/désactivation du log : dwapsLog.active(true|false) (true par défaut)
*       - Gestion du type de log : dwapsLog.setType(|'info'|'warning') ('log par défaut')
*       - Affichage log : dwapsLog.show(""|{})
**/


angular
	.module('dwapsLog', [])

    .constant( 'LOG', {
        activate: true,
        type: {
            INFO:    false,
            WARNING: false
        },
        show: 
            function() {
                if(this.activate)
                {
                    console.log("Test log by dwaps ok !");
                }
            }
    })

    .service('dwapsLog', dwapsLog)

;



function dwapsLog(LOG)
{
	function show(mss)
	{
        if(LOG.activate)
        {
            if(LOG.type.INFO) console.info(mss);
            else if(LOG.type.WARNING) console.warn(mss);
            else console.log(mss);
        }
	}

    function setType(type)
    {
        switch(type)
        {
            case 'info':
                LOG.type.INFO = true;
                LOG.type.WARNING = false;
                break;
            case 'warning':
                LOG.type.INFO = false;
                LOG.type.WARNING = true;
                break;
            default:
                LOG.type.INFO = false;
                LOG.type.WARNING = false;
        }
    }

    function active(isActive)
    {
        LOG.activate = isActive;
    }

    return {
        show:       show,
        setType:    setType,
        active:     active
    };
}