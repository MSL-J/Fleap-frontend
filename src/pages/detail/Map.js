/*global kakao*/

import React, { Component } from "react";
import "./Map.scss";
class Map extends React.Component {
  constructor(props) {
    super(props);
  }
  map;
  markers = [];
  infowindows = [];
  componentDidMount() {
    var container = document.getElementById("myMap"); //지도를 담을 영역의 DOM 레퍼런스
    var options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.577783, 126.97093), //지도의 중심좌표.
      level: 4, //지도의 레벨(확대, 축소 정도)
    };
    this.map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }
  render() {
    return (
      <div className="popup">
        <div id="myMap" />
      </div>
    );
  }
}
export default Map;
