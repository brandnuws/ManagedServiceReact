import React, { useState, useEffect, Fragment} from 'react';
import './App.css';
import './resources/static/css/sb-admin-2.css';
import './resources/static/css/sb-admin-2.min.css';
import './resources/static/vendor/fontawesome-free/css/all.min.css';
//import 'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i';
import './resources/static/vendor/datatables/dataTables.bootstrap4.min.css';
import customAxios from './customAxios';



function App() {
  // IP주소 변수 선언
  const [list, setList] = useState([]);
  
  

  function callback(data){
    var test = {
      data:{id:'', value:''}
    }
    setList(test);
  }
  // 첫번째 렌더링을 다 마친 후 실행합니다.
  useEffect(
    () => {
      // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.
      customAxios('/list2', callback);
    }, []
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       이 기기의 IP주소는 {ip}입니다.
  //     </header>
  //   </div>
  // );
  return (
   <Fragment>
   <div>
      hello
    </div>
    <h1 class="h3 mb-2 text-gray-800">table</h1>
                    <p class="mb-4">충전이력 JPA TEST.
                    	<a target="_blank" href="https://datatables.net"></a>
                    </p>

                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">충전이력</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>충전이력ID</th>
                                            <th>회원ID</th>
                                            <th>충전시작시간</th>
                                            <th>충전종료시간</th>
                                            <th>멤버십카드번호</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>충전이력ID</th>
                                            <th>회원ID</th>
                                            <th>충전시작시간</th>
                                            <th>충전종료시간</th>
                                            <th>멤버십카드번호</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {/* <tr th:each="data : ${chargeList}">
                                            <td th:text="${data.chargeHistId}">충전이력ID</td>
                                            <td th:text="${data.membId}">회원ID</td>
                                            <td th:text="${data.chargeStDate}">충전시작시간</td>
                                            <td th:text="${data.chargeEndDate}">충전종료시간</td>
                                            <td th:text="${data.membCardNo}">멤버십카드번호</td>
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
  </Fragment>
  );
}

export default App;
