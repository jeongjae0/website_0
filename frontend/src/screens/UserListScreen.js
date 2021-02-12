import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, listUsers } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { USER_DETAILS_RESET } from '../constants/userConstants';

export default function UserListScreen(props) {
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userDelete = useSelector((state) => state.userDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = userDelete;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUsers());
    dispatch({
      type: USER_DETAILS_RESET,
    });
  }, [dispatch, successDelete]);
  const deleteHandler = (user) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteUser(user._id));
    }
  };
  return (
    <div>
      <h1>사용자들</h1>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {successDelete && (
        <MessageBox variant="success">사용자가 성공적으로 데이터에서 삭제되었습니다.</MessageBox>
      )}
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
              <th>닉네임</th>
              <th>전화번호</th>
              <th>이메일</th>
              <th>판매자?</th>
              <th>관리자?</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.nickname}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.email}</td>
                <td>{user.isSeller ? 'YES' : ' NO'}</td>
                <td>{user.isAdmin ? 'YES' : 'NO'}</td>
                <td>
                  <button
                    type="button"
                    className="small"
                    onClick={() => props.history.push(`/user/${user._id}/edit`)}
                  >
                    수정하기
                  </button>
                  <button
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(user)}
                  >
                    삭제하기
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
