/**
 * Created by saix on 2018/3/12.
 */
import React, { Component } from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import '../style/page-ani.css'

export default class PageTransition extends Component {
    static getState (type = 'left') {
        return {
            transition: type
        }
    };
    render({children}) {
        const { route={} } = this.context?(this.context.router||{}):({})
        const {location={}} = route
        let transition = 'si'
        // if (location.state && location.state.transition) {
        //   switch (location.state.transition) {
        //     case 'right':
        //       transition = 'si'
        //       break
        //     case 'left':
        //       transition = 'so'
        //       break
        //   }
        // }
        return (
            <TransitionGroup component="section" className="pages">
                <CSSTransition
                    classNames={`pt-${transition}`}
                    timeout={300}
                    key={location.pathname}
                >
                    {children}
                </CSSTransition>
            </TransitionGroup>
        )
    }
}
