import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listOrderMine } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ConversionHistoryScreen(props) {
  const orderMineList = useSelector((state) => state.orderMineList);
  const { loading, error, orders } = orderMineList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOrderMine());
  }, [dispatch]);
  return (
    <div>
      <h1>환전내역</h1>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>아이디</th>
              <th>이름</th>
              <th>전화번호</th>
              <th>이메일</th>
              <th>은행</th>
              <th>환전금액</th>
              <th>시간</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.name}</td>
                <td>{order.phoneNumber}</td>
                <td>{order.email}</td>
                <td>
                  {order.bankName}
                </td>
                <td>{order.totalConversion.toFixed(2)}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() => {
                      props.history.push(`/order/${order._id}`);
                    }}
                  >
                    상세보기
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
