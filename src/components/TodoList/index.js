import { useState, useRef } from 'react';
import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import todoListSlice from './TodoListSlice'
import { v4 as uuidv4 } from 'uuid'

export default function TodoList() {
    const [input, setInput] = useState('')
    const [priority, setPriority] = useState('Medium')
    const search = useSelector((state) => state.filters.search)
    const priorities = useSelector((state) => state.filters.priorities)
    const todoList = useSelector((state) => state.todoList
        .filter(todo => {
            if (state.filters.status === 'All') {
                return priorities.length
                    ? todo.name.toLowerCase().includes(search.toLowerCase()) && priorities.includes(todo.priority)
                    : todo.name.toLowerCase().includes(search.toLowerCase())
            }

            return (
                todo.name.toLowerCase().includes(search.toLowerCase()) &&
                (state.filters.status === 'Completed' ? todo.completed : !todo.completed) &&
                (priorities.length ? priorities.includes(todo.priority) : true)
            )
        }))
    const inputFocus = useRef()

    const dispatch = useDispatch()

    const handleAddTodo = () => {
        dispatch(todoListSlice.actions.addTodo({
            id: uuidv4(),
            name: input,
            priority: priority,
            completed: false
        }))
        setInput('')
        setPriority('Medium')
        inputFocus.current.focus()
    }

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handlePriority = (value) => {
        setPriority(value)
    }

    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                {
                    todoList.map((todo) => (
                        <Todo
                            name={todo.name}
                            priority={todo.priority}
                            completed={todo.completed}
                            key={todo.id}
                            id={todo.id} />
                    ))
                }
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: 'flex' }} compact>
                    <Input value={input} onChange={handleInput} ref={inputFocus} />
                    <Select defaultValue="Medium" value={priority} onChange={handlePriority}>
                        <Select.Option value='High' label='High'>
                            <Tag color='red'>High</Tag>
                        </Select.Option>
                        <Select.Option value='Medium' label='Medium'>
                            <Tag color='blue'>Medium</Tag>
                        </Select.Option>
                        <Select.Option value='Low' label='Low'>
                            <Tag color='gray'>Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type='primary' onClick={handleAddTodo}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}