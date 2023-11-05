import React from 'react';
import './navigation.css'

export function Navigation() {
    return (
        <div className='navigationWrapper'>
            <div className='navigationTabs'>
                <span className='tab'>
                    O nás
                </span>
                <span className='tab'>
                    Kontakt
                </span>
                <span className='tab'>
                    Hlavná stránka
                </span>
            </div>
            <span className='loginButton'>
                Prihlásenie
            </span>
        </div>
    );
}
