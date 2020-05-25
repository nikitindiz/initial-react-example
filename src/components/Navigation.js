import React from 'react';

const Navigation = () => (
    <div className="left-sidebar left-sidebar--visible">
        <div className="left-sidebar__toolbar">
            Navigation
        </div>

        <a
            href="/"
            className={
                'sidebar-navigation-item ' +
                (window.location.search === '' && 'sidebar-navigation-item--active')
            }
        >
            Cats gallery
        </a>

        <a
            href="/?page=traffic-lights"
            className={
                'sidebar-navigation-item ' +
                (window.location.search === '?page=traffic-lights' && 'sidebar-navigation-item--active')
            }
        >
            Traffic lights
        </a>

        <a
            href="/?page=traffic-lights-controlled-btns"
            className={
                'sidebar-navigation-item ' +
                (window.location.search === '?page=traffic-lights-controlled-btns' && 'sidebar-navigation-item--active')
            }
        >
            Traffic lights Controlled with buttons
        </a>

        <a
            href="/?page=traffic-lights-controlled-auto"
            className={
                'sidebar-navigation-item ' +
                (window.location.search === '?page=traffic-lights-controlled-auto' && 'sidebar-navigation-item--active')
            }
        >
            Traffic lights Controlled automatically
        </a>



        <a
            href="/?page=inputs"
            className={
                'sidebar-navigation-item ' +
                (window.location.search === '?page=inputs' && 'sidebar-navigation-item--active')
            }
        >
            Inputs
        </a>


        <a
            href="/?page=address-book"
            className={
                'sidebar-navigation-item ' +
                (window.location.search === '?page=address-book' && 'sidebar-navigation-item--active')
            }
        >
            Address book
        </a>
    </div>
);

export default Navigation;
