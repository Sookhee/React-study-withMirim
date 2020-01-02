import React from 'react';
import styles from './CSSModule.module.scss';
const CSSModule = () => {
    return (
        // 클래스 두개 이상 적용 시킬 때
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            안녕하세요, 저는 <span className="something">CSS Module!</span>
        </div>
    );
};

export default CSSModule;