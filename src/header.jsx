const lastName = 'Toan'

const sum = (a, b) => a + b

const element = (
  <h1>
    hello, world! I am {lastName}. I am {sum(10, 16)}
  </h1>
)

//tên thuộc tính phải chuyển thành camelCase - tức là viết hoa chữ cái từ tiếp theo cua thuộc tính vdu tabIndex className
const element2 = <a href='google.com' tabIndex="11" className='123' id="the-a">Google</a>

//thẻ k có nội dung có thể viết gọn
const element3 = <h3></h3>
//const element3 = </h3>

const element4 = <img src="" />
const element5 = <input type="text" />

const element6 = <h1 className="greeting">Hello</h1>

//Babel bien dich
// eslint-disable-next-line no-undef
const element7 = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello'
)

const elemen = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello'
  }
}