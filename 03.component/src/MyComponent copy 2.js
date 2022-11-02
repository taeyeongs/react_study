import PropTypes from 'prop-types';
//함수형
//function MyComponent() {}

//const MyComponent = (props) => {
    //const {name, children} = props // 비구조화할당
const MyComponent = ({name, forNumber, children}) => { //비구조화할당
    return (
    <div>
        <div>안녕 {name} 새로운 컴포넌트 입니다.</div><br />
        칠드런 같은 {children} 입니다.<br />
        좋아하는 숫자는{forNumber} 입니다.
    </div>
    ) 
}

MyComponent.defaultProps = {
    name: '기본이름'
}

MyComponent.propTypes = {
    name: PropTypes.string, //문자열인지를 확인한다
    forNumber: PropTypes.number.isRequired //숫자열인지를 확인한다 ,  isRequired 필수값 검증
}

export default MyComponent