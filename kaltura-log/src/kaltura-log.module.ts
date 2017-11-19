import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KalturaLogger } from './kaltura-logger.service';
import { JL } from 'jsnlog';


var consoleAppender=JL.createConsoleAppender('consoleAppender');
JL().setOptions({"appenders": [consoleAppender]});


function createLoggerFactory(name: string) : Provider[]
{
    return KalturaLogger.createFactory(name);
}

@NgModule({
    imports: <any[]>[
        CommonModule
    ],
    declarations: <any[]>[

    ],
    exports: <any[]>[
    ],
    providers: <any[]>[
        ]
})
export class KalturaLogModule {
    // constructor(@Optional() @SkipSelf() module : KalturaCoreModule, private appBootstrap : AppBootstrap)
    // {
    //     if (module) {
    //         throw new Error("KMCngCoreModule module imported twice.");
    //     }
    // }

    static forRoot(name: string): ModuleWithProviders {
        return {
            ngModule: KalturaLogModule,
            providers: [
                createLoggerFactory(name)
            ]
        };
    }
}
