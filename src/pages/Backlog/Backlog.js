import React from 'react';
import Task from '../../components/Task/Task';
import useDataFetching from '../../components/Hooks/useDataFetching';

function Backlog (props) {

    const [loading, error, tasks] = useDataFetching('https://my-json-server.typicode.com/Santrixs12345/my-api/tasks');

    return (
        <div className = 'Backlog-wrapper'>
            <h2>Backlog</h2>
            <div className = 'Task-wrapper'>
                {loading || error ? (
                    <span>{error || 'Loading...'}</span>
                ):(
                    tasks.map((task) => (
                        <Task
                            key={task.id}
                            title={task.id}
                            body={task.body}
                        />
                    ))
                )}
            </div>
            
        </div>
    );
};

export default Backlog;