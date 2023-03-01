import React from 'react'
import PropTypes from 'prop-types'
import { Tasks } from '../../Models/Tasks'

function ItemTask(props) {
  return (
    <div>
        <ul>
            {props.tasks.map(task => (
              <li key={task.id}>
                <div>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                    {
                        task.completed? `<i class="fa-solid fa-circle-check"></i>`
                        : (!Tasks.completed && (Tasks.priority === (3 || 2))(
                            <i class="fa-duotone fa-spinner"></i>)
                            :
                            ()
                        ) 
                    }

                </div>    
            </li>
            ))}
        </ul>

    </div>
  )
}

ItemTask.propTypes = {

    tasks: PropTypes.instanceOf(Tasks)
}

export default ItemTask
