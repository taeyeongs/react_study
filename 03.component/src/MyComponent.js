import PropTypes from 'prop-types';
import { Component } from 'react';

//class형
class MyComponent extends Component {
    static defaultProps = {
        name: '기본이름'
    }

    static propTypes = {
        name: PropTypes.string, //문자열인지를 확인한다
        forNumber: PropTypes.number.isRequired //숫자열인지를 확인한다 ,  isRequired 필수값 검증
    }

    render() {
        const {name, forNumber, children} = this.props
        return (
            <div>
                <div>안녕 {name} 새로운 컴포넌트 입니다.</div><br />
                칠드런 같은 {children} 입니다.<br />
                좋아하는 숫자는{forNumber} 입니다.
            </div>
            ) 
    }
}

export default MyComponent