import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Input, Select, Button, Tag } from 'antd'
import todoListSlice from './todoListSlice'
import { v4 as uuidv4 } from 'uuid'
import Todo from '../Todo'

const { Group } = Input
const { Option } = Select

export default function TodoList() {
    const [input, setInput] = useState('')
    const [priority, setPriority] = useState('Medium')
    const inputRef = useRef()

    // Filter
    const search = useSelector(state => state.filters.search)
    const status = useSelector(state => state.filters.status)
    const priorities = useSelector(state => state.filters.priorities)
    const todoList = useSelector((state) => {
        return state.todoList
            .filter(todo => todo.name.toLowerCase().includes(search.toLowerCase()))
            .filter(todo => {
                if (status === 'All') return true
                return status === 'Completed' ? todo.completed : !todo.completed
            })
            .filter(todo => priorities.length ? priorities.includes(todo.priority) : true)
    })

    const dispatch = useDispatch()

    const handleAddTodo = () => {
        dispatch(todoListSlice.actions.addTodo({
            id: uuidv4(),
            name: input,
            priority: priority,
            completed: false,
        }))
        setInput('')
        setPriority('Medium')
        inputRef.current.focus()
    }

    return (
        <Row style={{ height: 'calc(100% -40px)' }}>
            <Col span={24} style={{ height: '150px', overflowY: 'auto', padding: 3 }}>
                {
                    todoList.length ? todoList.map(todo => {
                        const { id, name, priority, completed } = todo
                        return (
                            <Todo
                                id={id}
                                key={id}
                                name={name}
                                priority={priority}
                                completed={completed}
                            /> 
                        )
                    }) : <h1>No task to be done!!</h1>
                }
            </Col>
            <Col span={24} style={{ marginTop: '2rem' }}>
                <Group style={{ display: 'flex', width: '100%' }} compact>
                    <Input value={input} onChange={e => setInput(e.target.value)} ref={inputRef} />
                    <Select defaultValue='Medium' value={priority} onChange={value => setPriority(value)}>
                        <Option value='High' label='High'>
                            <Tag color='red'>High</Tag>
                        </Option>
                        <Option value='Medium' label='Medium'>
                            <Tag color='green'>Medium</Tag>
                        </Option>
                        <Option value='Low' label='Low'>
                            <Tag color='grey'>Low</Tag>
                        </Option>
                    </Select>
                    <Button type='primary' onClick={handleAddTodo}>Add</Button>
                </Group>
            </Col>
        </Row>
    )
}