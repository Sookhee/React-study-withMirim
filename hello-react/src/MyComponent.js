import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({name, favoriteNumber, children}) =>{
    //const {name, children} = props;
    return (
        <div>
            안녕하세요, 제 이름은 {name}입니다.<br/>
            children 값은 {children}입니다.<br/>
            제가 좋아하는 숫자는 {favoriteNumber}입니다.
        </div>
    )
};

//props 기본값 설정 : defaultProps
MyComponent.defaultProps = {
    name : '기본 이름'
};

//name 값은 무조건 문자열(string)으로 넘겨야 한다는 의미
MyComponent.propTypes = {
    name : PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired
};


export default MyComponent;