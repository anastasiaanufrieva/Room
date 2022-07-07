import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getAllRooms } from '../../Redux/actions/roomAction';
import { List } from 'reactstrap'
import { getRoom } from '../../Redux/actions/deviceAction';

export default function Room() {
  const dispatch = useDispatch();
  const { rooms } = useSelector((state) => state);
  const { id } = useParams();

  const clickHandler = (id) => {
    dispatch(getRoom(id))
  }

  useEffect(() => {
      dispatch(getAllRooms());
    }, []);

  return (
    <List type="unstyled">
      <ul>
        {rooms?.map((el) => (
          < li key={el.id}>
            <div>
              <Link to={`/rooms/${el.id}`} onClick={() => clickHandler(id)}>{el.room}</Link>
            </div>
          </li>
        ))}
      </ul>
    </List >
  )
}
