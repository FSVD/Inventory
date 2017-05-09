import { animate, AnimationEntryMetadata, style, state, trigger, transition } from '@angular/core'

export const SlideComponent: AnimationEntryMetadata = 
    trigger('SlideComponentAnim', [
        state('*',
            style({
                opacity: 1,
                transform: 'translateX(0)'
            })
        ),
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateX(-100%)'
            }),
            animate('0.3s ease-in')
        ]),
        transition(':leave', [
            animate('0.3s ease-out', style({
                opacity: 0,
                transform: 'translateX(100%)'
            }))
        ])
    ]);