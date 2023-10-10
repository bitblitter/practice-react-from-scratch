import React from 'react';
import classNames from 'classnames';
import '@/global.scss'
import styles from './app.module.scss';

export default function App() {
    return (
        <div className={classNames('layout')}>
            Main App entry
        </div>
    )
}
App.displayName = 'App';