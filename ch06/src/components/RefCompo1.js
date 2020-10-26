import React, { Component } from "react";

class RefCompo1 extends Component {
  //ref 속성값 생성
  uidRef = React.createRef();

  onClickHandler1 = () => {
    document.getElementById("uid").focus();
  };

  onClickHandler2 = () => {
    this.uidRef.current.focus();
  };
  render() {
    return (
      <div className="RefCompo1">
        <strong>RefCompo1</strong>
        <br />

        {/* DOM 식별 값을 ID로 지정 */}
        <input type="text" name="uid" id="uid" />
        <button onClick={this.onClickHandler1}>선택</button>
        <br />
        {/* DOM 식별 값을 ref로 지정 */}
        <input type="text" name="uid" ref={this.uidRef} />
        <button onClick={this.onClickHandler2}>선택</button>
      </div>
    );
  }
}

export default RefCompo1;
