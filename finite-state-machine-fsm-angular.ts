import { Component } from '@angular/core';




@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {

    constructor(
        ...,
        private ref: ChangeDetectorRef,
      ) { }

      onClick = ()=> {
        this.transitionFSM('load')

      }
    
    widgetState = 'INITIAL'

transitions = {
    INITIAL: {
      load: 'LOADING',
      onError: 'ERRORED',
    },
    LOADING: {
      onError: 'ERRORED',
      onFooLoaded: 'FOO_LOADED',
      onBarLoaded: 'BAR_LOADED',
    },
    ERRORED: {
    },
    FOO_LOADED: {
      onError: 'ERRORED',
      load: 'LOADING',
    },
    BAR_LOADED: {
      onError: 'ERRORED',
      load: 'LOADING',
    },
}

    transitionFSM = (edge) => {
        const newState = this.transitions[this.widgetState][edge]
        if (newState) {
          this.widgetState = newState
          this.ref.detectChanges()
        }
    
        else {
          console.log(`FiniteStateMachine: a request to transition via the ${edge} edge was made, but the state ${this.widgetState} does not have a(n) ${edge} edge`)
        }
      }

      
  message: string = 'Hello, Angular!';
}

