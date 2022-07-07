import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { List } from 'reactstrap';
import { getRoom, saveStatus, status } from '../../Redux/actions/deviceAction';




export default function Elem() {
  const { devices } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id } = useParams()

  useEffect(() => {
    dispatch(getRoom(id));
  }, []);

  const btnHandler = (id, elId) => {
    dispatch(status(elId))
    saveStatus(id, elId)
  }

  return (
    <List type="unstyled">
      <ul>
        {devices?.map((el) => (
          <li key={el.id}>

            <div> {el.device}</div>
            {el.status ?
              <img src={`http://localhost:3001/${el.onPicture}`} alt='card' />
              :
              <img src={`http://localhost:3001/${el.offPicture}`} alt='card' />
            }
            <button onClick={() => btnHandler(id, el.id)}>button</button>
          </li>
        ))}
      </ul>
  
    </List>
  )
}
