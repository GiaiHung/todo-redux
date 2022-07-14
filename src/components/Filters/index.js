import { useDispatch } from 'react-redux'
import { Col, Row, Input, Select, Typography, Radio, Tag } from 'antd'
import filterSlice from './filterSlice'

const { Paragraph } = Typography
const { Search } = Input
const { Option } = Select

export default function Filters() {
    const dispatch= useDispatch()

    const handleFilterSearch = (e) => {
        dispatch(filterSlice.actions.filterSearch(e.target.value))
    }

    const handleStatus = (e) => {
        dispatch(filterSlice.actions.filterStatus(e.target.value))
    }

    const handleFilterPriorities = (value) => {
        dispatch(filterSlice.actions.filterPriorities(value))
    }

    return (
        <Row justify='center' style={{ margin: '1rem 0' }}>
            <Col span={24}>
                <Paragraph style={{ fontWeight: 'bold' }}>Search</Paragraph>
                <Search
                    placeholder='Search todos...'
                    onChange={handleFilterSearch}
                />
            </Col>

            <Col span={24}>
                <Paragraph style={{ fontWeight: 'bold', marginTop: '1rem' }}>Filter By Status</Paragraph>
                <Radio.Group defaultValue={'All'} onChange={handleStatus}>
                    <Radio value='All'>All</Radio>
                    <Radio value='Completed'>Completed</Radio>
                    <Radio value='Todo'>Todo</Radio>
                </Radio.Group>
            </Col>

            <Col span={24}>
                <Paragraph style={{ fontWeight: 'bold', margin: '1rem auto' }}>Filter By Priority</Paragraph>
                <Select
                    mode='multiple'
                    allowClear
                    placeholder='Please select'
                    style={{ width: '100%' }}
                    onChange={handleFilterPriorities}
                >
                    <Option value='High' label='High'>
                        <Tag color='red'>High</Tag>
                    </Option>
                    <Option value='Medium' label='Medium'>
                        <Tag color='green'>Medium</Tag>
                    </Option>
                    <Option value='Low' label='Low'>
                        <Tag color='gray'>Low</Tag>
                    </Option>
                </Select>
            </Col>
        </Row>
    )
}