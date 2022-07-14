import { Row, Tag, Checkbox, Button } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import todoListSlice from '../TodoList/todoListSlice';

const priorityColorMapping = {
    High: 'red',
    Medium: 'green',
    Low: 'grey'
}

export default function Todo({ id, name, priority, completed }) {
    const [checked, setChecked] = useState(completed)

    const dispatch = useDispatch()

    const handleCheck = () => {
        setChecked(!checked)
        dispatch(todoListSlice.actions.toggleTodo(id))
    }

    const handleDelete = () => {
        dispatch(todoListSlice.actions.deleteTodo(id))
    }

    return (
        <Row justify='space-between' style={{
            marginBottom: '1rem',
            ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : '')
        }}>
            <Checkbox checked={checked} onChange={handleCheck}>
                {name}
            </Checkbox>
            <Tag color={priorityColorMapping[priority]}>
                {priority}
            </Tag>
            <Button type='primary' danger onClick={handleDelete}>Delete</Button>
        </Row>
    )
}